import React, { useRef, useState } from "react";
import logo from "../../logo.svg";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./Login/Login";

function Header() {
  const cinema = useSelector((state) => state.cinemaManage);
  const nav = useNavigate();
  return (
    <div className="Header">
      <div className="container">
        <img onClick={() => nav("/")} src={logo} className="logo" alt="logo" width={80} />
        <div className="menuDropDown">
          <div className="hover">
            <Link to="film">Phim</Link>
          </div>
          <div className="hover">
            <Link>Cinema</Link>
            <div className="hidden">
              <div className="flex">
                {cinema.lsCinema.map((value, index) => {
                  return (
                    <Link key={index} to={`cinema/${value.slug}`}>
                      {value.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hover">
            <Link to={"commingSoon"}>Event</Link>
          </div>
          <div className="hover">
            <Link to={"commingSoon"}>About</Link>
          </div>
        </div>

        <div className="card flex justify-content-center align-items-center">{<Login />}</div>
      </div>
    </div>
  );
}

export default Header;
