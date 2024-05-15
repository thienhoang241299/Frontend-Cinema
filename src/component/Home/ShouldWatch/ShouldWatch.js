import React from "react";
import "./ShouldWatch.scss";
export default function ShouldWatch() {
  return (
    <div className="ShouldWatch">
      <div className="movie">
        <div>
          <img src="https://images2.thanhnien.vn/zoom/622_389/528068263637045248/2023/7/21/goat-rodeo-payoff-4x5-vietnam-16899267803032129196577-0-4-372-599-crop-1689926817733757577624.jpg" alt="" />
          <div className="infor">
            <button>Buy Ticket</button>
            <h2>The Marvel</h2>
          </div>
        </div>
        <div>
          <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/lich-chieu-phim-five-nights-at-freddys-movie-thumb.jpg" alt="" />
          <div className="infor">
            <button>Buy Ticket</button>
            <h2>Five Nights At Freddy's</h2>
          </div>
        </div>
        <div>
          <img src="https://w0.peakpx.com/wallpaper/673/356/HD-wallpaper-2023-grand-turismo-8k-gran-turismo-movies-2023-movies.jpg" alt="" />
          <div className="infor">
            <button>Buy Ticket</button>
            <h2>Gran Turismo</h2>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1>Best Movie You Should Watch</h1>
        <button>Discover more</button>
      </div>
      <div className="movieInfor">
        <div className="container">
          <div>
            <h5>Doanh Thu</h5>
            <h4>20 Tỷ</h4>
          </div>
          <div>
            <h5>Doanh Thu</h5>
            <h4>20 Tỷ</h4>
          </div>
          <div>
            <h5>Doanh Thu</h5>
            <h4>20 Tỷ</h4>
          </div>
          <div>
            <h5>Doanh Thu</h5>
            <h4>20 Tỷ</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
