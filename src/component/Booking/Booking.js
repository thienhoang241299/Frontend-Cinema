import React, { useContext, useState } from "react";
import "../Booking/Booking.scss";
import moment from "moment";
import { Outlet, useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookTicket from "./BookTicket/BookTicket";
export default function Booking() {
  const { bookData } = useContext(BookingContext);
  const nav = useNavigate();
  const [isNext, SetIsNext] = useState(false);
  return (
    <div className="booking">
      <div className="booking-container">
        <div className="booking-select">
          <Outlet />
        </div>
        <div className="booking-bill-detail">
          <div className="booking-title">
            <div className="booking-img">
              <img src={bookData?.ImagePortrait}></img>
            </div>
            <div>
              <h5>{bookData?.FilmName}</h5>
              <p>2D Phụ Đề</p>
            </div>
          </div>
          <div className="booking-title-theater">
            <p>
              {bookData?.CinemaName} - {bookData?.TheaterName}
            </p>
            <p>
              Suất : {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("LT")} - {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("dddd")}{" "}
              {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("l")}{" "}
            </p>
            <div>--------------------------------------------------------</div>
            <p>Danh sách ghế: {bookData?.SeatCode.map((n) => n).join(", ")}</p>
            <div>--------------------------------------------------------</div>
            <p>List Combo</p>
            <div className="lsCombo">
              {bookData?.Combo.map((n, i) => {
                return n.number == 0 ? (
                  ""
                ) : (
                  <p key={i}>
                    {n.name} x {n.number}
                  </p>
                );
              })}
            </div>
            <div>--------------------------------------------------------</div>
            <p>Tổng: {bookData?.Price * 10}</p>
          </div>
          <div className="button-booking">
            {}
            {!isNext ? (
              <button
                onClick={() => {
                  if (bookData.SeatCode.length > 0) {
                    nav("combo");
                    SetIsNext(true);
                  }
                }}
                className="next-button"
              >
                Next
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    nav("");
                    SetIsNext(false);
                  }}
                >
                  Back
                </button>
                <BookTicket />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
