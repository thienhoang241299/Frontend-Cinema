import React, { useEffect, useState } from "react";
import "../LocalCinema/LocalCinema.scss";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "slider-moon";
import "slider-moon/dist/style.css";
import { MockData } from "./MockData";
import moment from "moment";
function LocalCinema() {
  const { idCinema } = useParams();
  const cinema = useSelector((state) => state.cinemaManage);
  const city = useSelector((state) => state.cityManage);
  const [cinemaCity, setCinemaCity] = useState([]);
  const [lsMovieCinema, setLsMovieCinema] = useState([]);
  const [currentDate] = useState(moment());
  const [moviesByDate, setMoviesByDate] = useState({});
  const [currentTab, setCurrentTab] = useState(0);
  const [selectMovie, setSelectMovie] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const handleTab = (value) => {
    setCurrentTab(value);
    setSelectMovie(null);
  };

  const handleSelectMovie = (movie) => {
    setSelectMovie(movie);
  };
  const selectShowTime = (showtime, showdate, theater, id) => {
    let data = {
      BankId: 0,
      CardNumber: "0000000000000000",
      CardName: "Nguyen Van A",
      ExpireDate: "0124",
      CVV: "888",
      Email: localStorage.getItem("cinema")?.Email != undefined ? localStorage.getItem("cinema").Email : "",
      Price: 0,
      Combo: [],
      SeatCode: [],
      ShowCode: id,
      ShowTime: moment(showdate + " " + showtime, "DD/MM/YYYYTHH:mm").format("YYYY-MM-DDTHH:mm:ss[Z]"),
      FilmName: selectMovie?.name,
      CinemaName: cinemaCity[0]?.name,
      TheaterName: theater,
      ImageLandscape: selectMovie?.imageLandscape,
      ImagePortrait: selectMovie?.imagePortrait,
    };

    const jsonString = JSON.stringify(data);
    sessionStorage.setItem("selectBooking", jsonString);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const filterCinemaCity = cinema.lsCinema.filter((cinema) => cinema.cityId === selectedCity);
  if (filterCinemaCity.length > 0) {
    const option2 = document.getElementById("option2");
    option2.disabled = false;
  }
  useEffect(() => {
    if (cinema.lsCinema.length > 0) {
      setCinemaCity(cinema.lsCinema.filter((cinema) => cinema.slug === idCinema));
      fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/cinemas/${cinema.lsCinema.find((cinema) => cinema.slug === idCinema)?.code}`)
        .then((res) => res.json())
        .then((data) => setLsMovieCinema(data));
    }
  }, [cinema.lsCinema, idCinema]);
  useEffect(() => {
    const moviesByDateObj = {};
    for (let i = 0; i < 6; i++) {
      const date = currentDate.clone().add(i, "days");
      const dateStr = date.format("DD/MM/YYYY");
      const dayOfWeek = date.format("dddd");
      const moviesForDate = lsMovieCinema.filter((movie) => movie.dates.some((date) => date.showDate === dateStr));
      moviesByDateObj[dateStr] = { dayOfWeek, movies: moviesForDate };
    }
    setMoviesByDate(moviesByDateObj);
  }, [currentDate, lsMovieCinema]);
  return (
    <div className="local-cinema">
      <Slider slideClass={"cinema-silder"} arrowsNav={true} bullets={true} infinite={true} animation={"scale"}>
        <div className="slider cinema-silder">
          <ul className="slider-wrapper">
            {MockData.map((value, index) => {
              return (
                <li key={index}>
                  <img alt="img" width={1400} src={value.img}></img>
                </li>
              );
            })}
          </ul>
        </div>
      </Slider>
      <div className="detail-cinema">
        {cinemaCity.map((value, index) => {
          return (
            <>
              <div key={index} className="cinema-name">
                <h2>{value.name}</h2>
                <p>Địa chỉ: {value.address}</p>
                <p>Hotline: {value.phone}</p>
              </div>
              <div className="select-cinema">
                <select onChange={handleCityChange} value={selectedCity}>
                  <option value={""} hidden>
                    Select City
                  </option>
                  {city.lsCity.map((value, index) => {
                    return <option value={value.id}>{value.name}</option>;
                  })}
                </select>
                <select id="option2" disabled onChange={(event) => (window.location.href = event.target.value)}>
                  <option hidden>Select Cinema</option>
                  {filterCinemaCity.map((value) => {
                    return <option value={`#/cinema/${value.slug}`}>{value.name}</option>;
                  })}
                </select>
              </div>
            </>
          );
        })}
      </div>
      {cinemaCity.map((value, index) => {
        return (
          <div key={index} className="bg-black">
            <div className="movie-container">
              <h2>PHIM</h2>
              <div className="movie-schedule">
                {Object.keys(moviesByDate).map((date, index) => {
                  return (
                    <div className={currentTab === index ? "select-movie-active" : "select-movie"} onClick={() => handleTab(index)} key={index}>
                      <h5>{moviesByDate[date].dayOfWeek}</h5>
                      <p>{date}</p>
                    </div>
                  );
                })}
              </div>
              <div className="border"></div>
              <div className="movie-schedule-detail">
                {Object.keys(moviesByDate).map((date, index) => {
                  return (
                    <>
                      {currentTab === index && (
                        <div>
                          <div className="movie-schedule-content">
                            {moviesByDate[date].movies.map((movie, index) => {
                              return (
                                <>
                                  <div onClick={() => handleSelectMovie(movie)}>
                                    <img alt={movie.slug} src={movie.imagePortrait}></img>
                                    <p>{movie.name}</p>
                                  </div>
                                </>
                              );
                            })}
                          </div>

                          <div>
                            {moviesByDate[date].movies.map((movie, index) => {
                              return (
                                <>
                                  {selectMovie === movie && (
                                    <div className="time-container">
                                      <p>2D-Phụ Đề</p>
                                      <div className="time-detail">
                                        {movie.dates
                                          .filter((dateItem) => dateItem.showDate === date)
                                          .map((showtime) => {
                                            return showtime.bundles.map((value) => {
                                              return value.sessions.map((value2) => {
                                                return (
                                                  <div>
                                                    <Link to={"/booking"}>
                                                      <p onClick={() => selectShowTime(value2.showTime, value2.showDate, value2.screenName, value2.id)}>
                                                        {value2.showTime}
                                                      </p>
                                                    </Link>
                                                  </div>
                                                );
                                              });
                                            });
                                          })}
                                      </div>
                                    </div>
                                  )}
                                </>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="discount-film">
              {value.ticket.map((value2, index2) => {
                return (
                  <div key={index2} className="discount-img">
                    <h2>GIÁ VÉ</h2>
                    <img width={"150px"} src={value2.url} alt="discount"></img>
                  </div>
                );
              })}
              <div className="infor-cinema">
                <h2>THÔNG TIN CHI TIẾT</h2>
                <p>Địa chỉ: {value.address} </p>
                <p>Số điện thoại: {value.phone}</p>
                <div className="google-map">
                  <iframe
                    title={value.name}
                    src={value.mapEmbeb}
                    width="650"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div dangerouslySetInnerHTML={{ __html: value.description }}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default React.memo(LocalCinema);
