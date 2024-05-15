import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Calender.scss'
export default function Calender(prop) {
  const dataTicket = JSON.parse(sessionStorage.getItem("selectBooking"));
  const nav = useNavigate();
  const HandelClick = (date, x) => {
    let showtime = moment(date + " " + x.showTime, "DD/MM/YYYYTHH:mm").format("YYYY-MM-DDTHH:mm:ss[Z]");
    dataTicket.ShowTime = showtime;
    dataTicket.CinemaName = prop.cinemaName;
    dataTicket.TheaterName = x.screenName;
    dataTicket.ShowCode = x.id;
    sessionStorage.setItem("selectBooking", JSON.stringify(dataTicket));
    nav("/booking");
  };
  return (
    <>
      {prop.data?.map((n, i) => {
        return (
          <div key={i} className="sessionDetail">
            <p className="dateDay">
              {n.dayOfWeekLabel}, {n.showDate}
            </p>

            {n.bundles?.map((m, j) => {
              return (
                <div key={j} className="sessionTime">
                  <p>
                    {m.version} - {m.caption == "voice" ? "L.tiếng" : "Phụ đề"}
                  </p>
                  <div>
                    {m.sessions?.map((x, v) => {
                      return (
                        <button onClick={() => HandelClick(n.showDate, x)} key={v}>
                          {x.showTime}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
