import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { BookingContext } from "../../context/BookingContext";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_COUNT } from "../../../redux/action/actBooking";
import "./BookTicket.scss";
export default function BookTicket() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [lsBank, SetLsBank] = useState([]);
  const { bookData, SetBookData } = useContext(BookingContext);
  const name = useRef("");
  const expDate = useRef("");
  const cvv = useRef("");
  const dataTicket = { ...bookData };
  const nav = useNavigate();
  const [selectCard, setSelectCard] = useState(null);
  const footerContent = (
    <div>
      <Button label="Hủy" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Đặt Vé" icon="pi pi-check" onClick={() => HandelSubmit()} autoFocus />
    </div>
  );
  const footerConfirm = (
    <div>
      <Button
        label="Xác Nhận"
        icon="pi pi-check"
        onClick={() => {
          nav("/");
          setVisible2(false);
        }}
        autoFocus
      />
    </div>
  );
  const [lsCard, SetLsCard] = useState();
  const [selectedBank, setSelectedBank] = useState(null);
  const dispatch = useDispatch();
  const HandelSubmit = () => {
    dataTicket.CardName = name.current.value;
    dataTicket.CardNumber = selectCard?.CardNumber == undefined || selectCard?.CardNumber == undefined ? selectCard : selectCard?.CardNumber;
    dataTicket.ExpireDate = expDate.current.value;
    dataTicket.Combo = JSON.stringify(bookData.Combo);
    dataTicket.SeatCode = JSON.stringify(bookData.SeatCode);
    dataTicket.CVV = cvv.current.value;
    dataTicket.BankId = selectedBank?.Id;
    dataTicket.Email = JSON.parse(localStorage.getItem("cinema"))?.Email != undefined ? JSON.parse(localStorage.getItem("cinema")).Email : "";
    console.log(selectCard);
    fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/Ticket`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTicket),
    })
      .then((res) => {
        if (res.status == 200) {
          sessionStorage.removeItem("selectBooking");
          sessionStorage.removeItem("countCombo");
          dispatch({ type: SET_COUNT, payload: [] });
          setVisible2(true);
          setVisible(false);
          toast.current.show({ severity: "success", summary: "Success", detail: "Mua Vé Thành Công", life: 3000 });
        } else {
          toast.current.show({ severity: "error", summary: "Error", detail: "Mua Ve That Bai", life: 2000 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img alt={option.Name} src={option.Logo} style={{ width: "18px" }} />
          <div>{option.Name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const toast = useRef(null);
  const show = () => {
    toast.current.show({ severity: "error", summary: "Error", detail: "Vui Lòng Đăng Nhập", life: 2000 });
  };
  useEffect(() => {
    fetch("https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/Bank/Bank")
      .then((res) => res.json())
      .then((dt) => {
        SetLsBank(dt);
      });
  }, []);
  const HandelBuyTicket = () => {
    if (localStorage.getItem("cinema") != undefined) {
      fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/Bank/CardRef/${JSON.parse(localStorage.getItem("cinema"))?.Email}`)
        .then((res) => res.json())
        .then((dt) => {
          SetLsCard(dt);
        });
      setVisible(true);
    } else {
      show();
    }
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.Name} src={option.Logo} style={{ width: "18px" }} />
        <div> {option.Name}</div>
      </div>
    );
  };
  const HandelCard = (e) => {
    setSelectCard(e.value);
    lsCard.forEach((n) => {
      if (n.CardNumber == e.value.CardNumber) {
        lsBank.forEach((m) => {
          if (m.Name == n.Name) {
            setSelectedBank(m);
          }
        });
      }
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Button label="Đặt Vé" icon="pi" onClick={() => HandelBuyTicket()} />
      <Dialog header="Thông tin đặt chỗ" visible={visible} style={{ width: "52vw" }} onHide={() => setVisible(false)} footer={footerContent}>
        <div className="bookTicket">
          <div className="payment">
            <h3>Information Payment</h3>
            <div className="card flex">
              <Dropdown
                value={selectCard}
                onChange={(e) => HandelCard(e)}
                options={lsCard}
                optionLabel="CardNumber"
                editable
                placeholder="Card Number"
                className="w-full md:w-16rem mt-4"
              />
            </div>
            <div className="card flex">
              <Dropdown
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.value)}
                options={lsBank}
                optionLabel="name"
                placeholder="Select a Bank"
                itemTemplate={countryOptionTemplate}
                valueTemplate={selectedCountryTemplate}
                className="w-full md:w-16rem mt-4"
              />
            </div>
            <span className="p-float-label mt-4">
              <InputText className=" w-full md:w-16rem" id="Name" ref={name} />
              <label htmlFor="Name">Họ và Tên chủ thẻ</label>
            </span>
            <span className="p-float-label mt-4">
              <InputText className=" w-full md:w-16rem" id="expDate" ref={expDate} />
              <label htmlFor="expDate">Exp Date</label>
            </span>
            <span className="p-float-label mt-4">
              <InputText className=" w-full md:w-16rem" id="cvv" ref={cvv} />
              <label htmlFor="cvv">CVV</label>
            </span>
          </div>
          <div className="inforTicket">
            <div className="booking-bill-detail">
              <h3>Thông tin vé</h3>
              <div className="booking-title">
                <div>
                  <h5>{bookData?.FilmName}</h5>
                  <p>2D Phụ Đề</p>
                </div>
              </div>
              <div className="booking-title-theater">
                <p>
                  {bookData?.CinemaName} - {bookData?.CheaterName}
                </p>
                <p>
                  Suất : {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("LT")} -{" "}
                  {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("dddd")} {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("l")}{" "}
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
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog header="Thông tin đặt chỗ" visible={visible2} style={{ width: "50vw" }} onHide={() => setVisible(false)} footer={footerConfirm}>
        <div className="bookTicket">
          <div className="inforTicket" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="booking-bill-detail">
              <div className="booking-title">
                <div>
                  <h3>{bookData?.FilmName}</h3>
                  <p>2D Phụ Đề</p>
                </div>
              </div>
              <div className="booking-title-theater">
                <div>
                  <p>
                    {bookData?.CinemaName} - {bookData?.CheaterName}
                  </p>
                  <p>
                    Suất : {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("LT")} -{" "}
                    {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("dddd")} {moment(bookData?.ShowTime, "YYYY-MM-DDTHH:mm:ss[Z]").format("l")}{" "}
                  </p>
                  <div>--------------------------------------------------------</div>
                  <p>Danh sách ghế: {bookData?.SeatCode.map((n) => n).join(", ")}</p>
                  <div>--------------------------------------------------------</div>
                  <p>List Combo</p>
                  <div className="lsCombo">
                    {console.log(bookData)}
                    {bookData?.Combo.map((n) => {
                      return n.number == 0 ? (
                        ""
                      ) : (
                        <p>
                          {n.name} x {n.number}
                        </p>
                      );
                    })}
                  </div>
                  <div>--------------------------------------------------------</div>
                  <p>Tổng: {bookData?.Price * 10}</p>
                </div>
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <img
                style={{ width: "100%", border: 0, borderRadius: 15, boxShadow: "5px 5px 8px 5px #888888" }}
                src={bookData.ImagePortrait != null ? bookData.ImagePortrait : ""}
                alt=""
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
