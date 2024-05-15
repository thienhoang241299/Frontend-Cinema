import React, { useState } from "react";
import "./Profile.scss";
import ima from "../Profile/img/rate2.png";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export default function Profile() {
  const storage = JSON.parse(localStorage.getItem("cinema"));
  const nav = useNavigate();
  const api = "https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user";

  const [currentTab, setCurrentTab] = useState(1);

  const handleTab = (value) => {
    setCurrentTab(value);
  };

  console.log(nav);

  return (
    <div className="Profile">
      <div className="container">
        <div className="col1">
          <div className="tren">
            <div className="avatar">
              <img src="https://www.galaxycine.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcamera.af597ff8.png&w=32&q=75" alt="avatar" />
            </div>
            <div className="name-start">
              <h4 className="flex ali-center">
                <img
                  src="https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2020%2F5%2F15%2Fs_1589511977688.png&w=32&q=75"
                  alt=""
                />
                {storage.Name}
              </h4>
              <p className="flex ali-center">
                {" "}
                <img className="i2" src="https://www.galaxycine.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ficon-gift.190935e4.png&w=16&q=75" alt="" />
                1111 Stars
              </p>
            </div>
          </div>

          <div className="chi-tieu">
            <h3>Tổng chi tiêu 2023</h3>
            <h3 className="d">11112003 ₫</h3>
          </div>

          <div className="thanh-tich">
            <img className="image" src={ima} alt="" />
          </div>

          <div className="hotline">
            <hr />
            <h5>
              HOTLINE hỗ trợ: <a href="">19002224 (9:00 - 22:00)</a>
            </h5>
            <hr />
            <h5>
              Email: <a href="">hotro@galaxystudio.vn</a>
            </h5>
            <hr />
            <h5>Câu hỏi thường gặp</h5>
          </div>
        </div>

        <div className="col2">
          <ul className="ulProfile">
            <li className={currentTab === 0 ? "select-active" : ""} onClick={() => [nav("history"), handleTab(0)]}>Lịch sử giao dịch</li>
            <li className={currentTab === 1 ? "select-active" : ""} onClick={() => [nav(""), handleTab(1)]}>Thông tin cá nhân</li>
            <li className={currentTab === 2 ? "select-active" : ""} onClick={() => [nav("notification"), handleTab(2)]}>Thông báo</li>
            <li className={currentTab === 3 ? "select-active" : ""} onClick={() => [nav("reward"), handleTab(3)]}>Quà tặng</li>
            <li className={currentTab === 4 ? "select-active" : ""} onClick={() => [nav("policy"), handleTab(4)]}>Chính sách</li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
}




// useEffect(() => {
  //   fetch(api, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       Email: "user@example.com",
  //       Name: "string",
  //       Password: "string",
  //     }),
  //   }).then((res) => res.json());

  //   fetch(api, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       Email: "user@example.com",
  //     }),
  //   }).then((res) => res.json());
  // }, []);
