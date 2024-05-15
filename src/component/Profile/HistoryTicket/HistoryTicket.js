import moment from "moment";
import React, { useEffect, useState } from "react";
import "./HistoryTicket.scss";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
export default function HistoryTicket() {
  const [gd, setLS] = useState([]);
  const lsgd = `https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/TicketByEmail/${JSON.parse(localStorage.getItem("cinema")).Email}`;
  const [visible, setVisible] = useState(false);
  const [detailTicket, SetDetailTicket] = useState(null);
  useEffect(() => {
    fetch(lsgd)
      .then((res) => res.json())
      .then((dt) => {
        setLS(dt);
      });
  }, []);
  const HandelHistory = (n) => {
    SetDetailTicket(n);
    console.log(n);
    setVisible(true);
  };
  return (
    <div className="HistoryTicket">
      <p>Lưu ý: chỉ hiển thị 20 giao dịch gần nhất</p>
      {gd.reverse().map((n, i) => (
        <div className="listTicket" key={i} onClick={() => HandelHistory(n)}>
          <div>
            <img className="image" src={n.ImagePortrait} alt="" />
          </div>
          <div className="thongtin">
            <h3>{n.FilmName}</h3>
            <p className="cinema-rap">
              {n.CinemaName} - {n.TheaterName}
            </p>
            <p className="time">
              {moment(n?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("LT")} - {moment(n?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("dddd")}{" "}
              {moment(n?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("l")}{" "}
            </p>
          </div>
        </div>
      ))}
      
      <Dialog header="Chi tiết vé" visible={visible} style={{ width: "60vw" }} onHide={() => setVisible(false)}>
        <div
          className="ticketDetail"
          style={{
            height: "600px !important",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, .25)",
            borderRadius: "15px",
            marginTop: "20px",
            padding: "20px",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ width: "460px", height: "auto", borderRadius: "15px" }} src={detailTicket?.ImageLandscape} alt="" />
          </div>
          <div className="aa" style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "30px" }}>
            <h3>{detailTicket?.FilmName}</h3>
            <p>
              {detailTicket?.CinemaName} - {detailTicket?.TheaterName}
            </p>
            <div>--------------------------------------------------------</div>
            <p>
              Suất : {moment(detailTicket?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("LT")} -{" "}
              {moment(detailTicket?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("dddd")} {moment(detailTicket?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("l")}{" "}
            </p>
            <div>--------------------------------------------------------</div>
            <p>
              Ghế Ngồi :{" "}
              {detailTicket?.SeatCode != undefined
                ? JSON.parse(detailTicket?.SeatCode)
                    .map((n) => n)
                    .join(", ")
                : ""}
            </p>
            <div>--------------------------------------------------------</div>
            <p>Combo : {detailTicket?.Combo != undefined ? JSON.parse(detailTicket?.Combo).map((n) => n.name + " x " + n.number) : ""}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
