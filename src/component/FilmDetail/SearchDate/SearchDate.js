import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useSelector } from "react-redux";
import "./SearchDate.scss";
import moment from "moment";
import Calender from "../Calender/Calender";
function SearchDate(idFilm) {
  let minDate = new Date();
  const [date, setDate] = useState(minDate);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const cinema = useSelector((state) => state.cinemaManage.lsCinema);
  const lsCity = useSelector((state) => state.cityManage).lsCity.filter((n) => {
    return cinema.some((m) => n.id === m.cityId);
  });
  const [lsFilm, SetLsFilm] = useState(null);
  const [cinemaDetail, SetCinemaDetail] = useState(null);

  useEffect(() => {
    if (selectedCity != null) {
      SetLsFilm(cinema.filter((m) => m.cityId === selectedCity.id));
    }
  }, [cinema, selectedCity]);
  useEffect(() => {
    fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/movie/${idFilm.idFilm}`)
      .then((res) => res.json())
      .then((dt) => {
        SetCinemaDetail(dt);
      });
  }, []);
  const HandelSearch = (e) => {
    setSelectedFilm(e);
    SetCinemaDetail((pre) => pre?.filter((m) => m.id === e.id));
  };
  useEffect(() => {
    if (date != null) {
      document.getElementById("SelectCity").style.pointerEvents = "";
      document.getElementById("SelectCity").style.opacity = "1";
    } else {
      document.getElementById("SelectCity").style.pointerEvents = "none";
      document.getElementById("SelectCity").style.opacity = "0.5";
    }
    if (selectedCity != null) {
      document.getElementById("SelectCinema").style.pointerEvents = "";
      document.getElementById("SelectCinema").style.opacity = "1";
    } else {
      document.getElementById("SelectCinema").style.pointerEvents = "none";
      document.getElementById("SelectCinema").style.opacity = "0.5";
    }
  });
  return (
    <div className="calender">
      <h3>Lịch Chiếu</h3>
      <div className="search-box">
        <div className="card flex justify-content-center">
          <Calendar value={date} id="date" minDate={minDate} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" showIcon />
          <Dropdown
            value={selectedCity}
            id="SelectCity"
            onChange={(e) => setSelectedCity(e.value)}
            options={lsCity}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
          <Dropdown
            value={selectedFilm}
            onChange={(e) => HandelSearch(e.value)}
            options={lsFilm}
            id="SelectCinema"
            optionLabel="name"
            placeholder="Select a Cinema"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      <div>
        <div>
          {cinemaDetail?.length > 0 ? (
            cinemaDetail?.map((v, i) => {
              let dataFilm = v.dates?.filter((n) => {
                return n.showDate === moment(date == null ? minDate : date).format("DD/MM/YYYY");
              });
              if (dataFilm.length > 0) {
                return (
                  <div className="calender-detail" key={i}>
                    <h4>{v?.name}</h4>

                    <Calender data={dataFilm} cinemaName={v?.name} />
                  </div>
                );
              }
            })
          ) : (
            <h3>Không có suất chiếu phù hợp.</h3>
          )}
          {/* {cinemaDetail?.map((v, i) => {
            let dataFilm = v.dates?.filter((n) => {
              return n.showDate === moment(date == null ? minDate : date).format("DD/MM/YYYY");
            });
            if (dataFilm.length > 0) {
              return (
                <div className="calender-detail" key={i}>
                  <h4>{v?.name}</h4>

                  <Calender data={dataFilm} cinemaName={v?.name} />
                </div>
              );
            }           })} */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(SearchDate);
