import React from "react";
import "./Film.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tag } from "primereact/tag";
function Film() {
  const lsMovie = useSelector((state) => state.movieManage);
  const nav = useNavigate();

  const HandelFilm = (slug, id) => {
    nav(`/movie/${slug}`, { state: { idFilm: id } });
  };
  console.log(lsMovie.lsMovie);
  return (
    <div className="Film container">
      <h1>Phim Đang Chiếu</h1>
      <div>
        {lsMovie.lsMovie.movieShowing?.map((v, i) => {
          return (
            <div
              className="film"
              key={i}
              onClick={() => {
                HandelFilm(v.slug, v.id);
              }}
            >
              <img src={v.imagePortrait} alt="" />
              {v.age > 0 && v.age < 18 ? (
                <Tag className="age" severity="warning" value={v.age + "+"}></Tag>
              ) : v.age >= 18 ? (
                <Tag className="age" severity="danger" value={v.age + "+"}></Tag>
              ) : (
                ""
              )}
              {v.point > 0 && v.point < 5 ? (
                <Tag className="point" icon="pi pi-star-fill" severity="danger" value={v.point.toFixed()}></Tag>
              ) : v.point >= 5 && v.point <= 8 ? (
                <Tag className="point" icon="pi pi-star-fill" severity="warning" value={v.point.toFixed()}></Tag>
              ) : (
                <Tag className="point" icon="pi pi-star-fill" severity="success" value={v.point.toFixed()}></Tag>
              )}
              {v.duration === null ? "" : <Tag className="time" icon="pi pi-clock" value={v.duration}></Tag>}
              {v.views === null ? "" : <Tag className="view" icon="pi pi-eye" value={v.views}></Tag>}

              <div>
                {console.log(v)}
                <div className="buttonHover">
                  <button>Buy ticket</button>
                  <button>Watch Detail Film</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Film);
