import React from "react";
import { Galleria } from "primereact/galleria";
import "./Banner.scss";
export default function Banner(props) {
  const itemTemplate = (lsMovieShowing) => {
    return <img src={lsMovieShowing.imageLandscape} alt={lsMovieShowing.name} style={{ width: "100%", display: "block" }} />;
  };

  const thumbnailTemplate = (lsMovieShowing) => {
    return <img src={lsMovieShowing.imageLandscapeMobile} alt={lsMovieShowing.name} style={{ display: "block", height: "4rem" }} />;
  };
  const caption = (lsMovieShowing) => {
    return (
      <React.Fragment>
        <div className="text-xl mb-2 font-bold">{lsMovieShowing.name}</div>
        <p className="text-white">{lsMovieShowing.subName != null ? lsMovieShowing.subName : ""}</p>
      </React.Fragment>
    );
  };
  return (
    <div className="banner">
      <div className="card">
        <Galleria
          value={props.data}
          circular
          numVisible={5}
          autoPlay
          transitionInterval={3000}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          caption={caption}
        />
      </div>
    </div>
  );
}
