import React, { useEffect, useState } from "react";
import "./Movie.scss";
import { useSelector } from "react-redux";
import { Carousel } from "primereact/carousel";
import { useNavigate } from "react-router-dom";
export default function Movie(props) {
  const nav = useNavigate();

  const HandelFilm = (slug, id) => {
    nav(`/movie/${slug}`, { state: { idFilm: id } });
  };
  const productTemplate = (movieShowing) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div onClick={() => HandelFilm(movieShowing.slug, movieShowing.id)} className="mb-3">
          {console.log(movieShowing)}
          <img src={`${movieShowing.imagePortrait}`} alt={movieShowing.name} className="w-6 shadow-2" />
        </div>
        <div>
          <h4 className="mb-1">{movieShowing.name}</h4>
          {/* <h6 className="mt-0 mb-3">${lsMovieShowing?.price}</h6> */}
        </div>
      </div>
    );
  };
  return (
    <div className="Movie">
      <div className="container">
        <div className="bottom">
          <div className="card">
            <Carousel
              value={props.data}
              numVisible={3}
              numScroll={3}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
