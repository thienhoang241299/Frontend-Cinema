import React from "react";
import "./CommentFilm.scss";
export default function CommentFilm(props) {
  return (
    <div className="CommentFilm">
      <div className="img-left">
        <img src={props.data[0].imgLink} alt="" />
        <h3>{props.data[0].title}</h3>
      </div>
      <div className="right">
        <div>
          <img src={props.data[1].imgLink} alt="" />
          <h3>{props.data[1].title}</h3>
        </div>
        <div>
          <img src={props.data[2].imgLink} alt="" />
          <h3>{props.data[2].title}</h3>
        </div>
        <div>
          <img src={props.data[3].imgLink} alt="" />
          <h3>{props.data[3].title}</h3>
        </div>
      </div>
    </div>
  );
}
