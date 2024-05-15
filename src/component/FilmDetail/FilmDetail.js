import React, { useEffect } from "react";
import "./FilmDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GET_FILM } from "../../redux/action/actFilm";
import moment from "moment/moment";
import parse from "html-react-parser";
import { GET_CITY } from "../../redux/action/actCity";
import SearchDate from "./SearchDate/SearchDate";
import { useLocation } from "react-router-dom";

function FilmDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) => state.movieManage.film);
  const id = useLocation();
  useEffect(() => {
    dispatch({
      type: GET_FILM,
      payload: slug,
    });
    dispatch({
      type: GET_CITY,
    });
  }, []);
  useEffect(() => {
    if (film.id) {
      let data = {
        BankId: 0,
        CardNumber: "",
        CardName: "",
        ExpireDate: "",
        CVV: "",
        Price: 0,
        ShowCode: "",
        Email: localStorage.getItem("cinema")?.Email != undefined ? localStorage.getItem("cinema").Email : "",
        CinemaName: "",
        TheaterName: "",
        FilmName: film.name,
        ImageLandscape: film.imageLandscape,
        ImagePortrait: film.imagePortrait,
        Combo: [],
        SeatCode: [],
        ShowTime: "2023-01-13T20:30Z",
      };
      sessionStorage.setItem("selectBooking", JSON.stringify(data));
    }
  }, [film.id, film.imageLandscape, film.imagePortrait, film.name, id]);
  return (
    <div className="FilmDetail">
      <div className="banner">
        <iframe
          width="1024"
          height="624"
          src={`https://www.youtube.com/embed/${film.trailer?.slice(32)}?`}
          title="YouTube video player"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="main">
        <div className="container">
          <div className="left">
            <div className="info">
              <img src={film.imagePortrait} alt="" />
              <div>
                <h1>{film.name}</h1>
                <p>
                  <i className="pi pi-clock" style={{ color: "var(--primary-color)" }}></i>
                  {" " + film.duration} Phút
                </p>
                <p>
                  <i className="pi pi-calendar" style={{ color: "var(--primary-color)" }}></i>
                  {" " + moment(film.startdate).format("DD/MM/YYYY")}
                </p>
                <h5>
                  <i className="pi pi-star-fill" style={{ color: "var(--primary-color)" }}></i>
                  {" " + film.point?.toFixed(1)}
                </h5>
                <div className="content">{parse(film.description ? film.description : "")}</div>
              </div>
            </div>
            <SearchDate idFilm={id.state === undefined ? film.id : id.state?.idFilm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FilmDetail);
