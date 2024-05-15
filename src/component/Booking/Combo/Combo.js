import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Combo.scss";
import { DOWN, SET_COUNT, UP } from "../../../redux/action/actBooking";
import { BookingContext } from "../../context/BookingContext";
import { createPath } from "react-router-dom";

const api = "https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/booking/detail";

function Combo() {
  const [cb, setCB] = useState([]);
  const countMap = useSelector((state) => state.bookingManage.countMap);
  const dispatch = useDispatch();
  const { bookData, SetBookData } = useContext(BookingContext);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((dt) => {
        let test = dt.consession[0].concessionItems;
        setCB(test);
      });
    if (sessionStorage.getItem("countCombo") != undefined) {
      dispatch({ type: SET_COUNT, payload: JSON.parse(sessionStorage.getItem("countCombo")) });
    }
  }, []);

  const handleUp = (index, combo, price) => {
    dispatch({ type: UP, payload: { index } });
    if (bookData.Combo?.some((n) => n.name === combo)) {
      let comboCount = bookData.Combo.map((n) => {
        if (n.name == combo) {
          n.name = combo;
          n.number = countMap[index] === undefined ? 1 : countMap[index] + 1;
        }
        return n;
      });
      SetBookData((pre) => ({ ...pre, Combo: comboCount }));
    } else {
      let comboCount = [...bookData.Combo, { name: combo, number: countMap[index] == undefined ? 1 : countMap[index] + 1 }];
      SetBookData((pre) => ({ ...pre, Combo: comboCount }));
    }
    SetBookData((pre) => ({ ...pre, Price: price + pre.Price }));
  };

  const handleDown = (index, combo, price) => {
    dispatch({ type: DOWN, payload: { index } });
    if (bookData.Combo?.some((n) => n.name === combo)) {
      let comboCount = bookData.Combo.map((n) => {
        if (n.name == combo) {
          n.name = combo;
          n.number = countMap[index] === undefined || countMap[index] === 0 ? 0 : countMap[index] - 1;
        }
        return n;
      });
      SetBookData((pre) => ({ ...pre, Combo: comboCount }));
    } else {
      let comboCount = [...bookData.Combo, { name: combo, number: countMap[index] === undefined ? 0 : countMap[index] - 1 }];
      SetBookData((pre) => ({ ...pre, Combo: comboCount }));
    }
    if (countMap[index] !== undefined && countMap[index] !== 0) {
      SetBookData((pre) => ({ ...pre, Price: pre.Price - price }));
    }
  };
  useEffect(() => {
    sessionStorage.setItem("countCombo", JSON.stringify(countMap));
  }, [countMap]);
  return (
    <div className="ComboBody">
      <div className="Combo">
        <div>
          {cb.map((n, i) => (
            <div className="a" key={i}>
              <div className="image">
                <img src={n.imageUrl} alt="" />
              </div>

              <div className="b">
                <p>{n.description}</p>
                <p>{n.extendedDescription}</p>

                <div className="gia">
                  <h4>Giá: {n.priceInCents * 10} ₫</h4>
                  <div className="num">
                    {countMap[i] > 0 ? <button onClick={() => handleDown(i, n.description, n.priceInCents)}>-</button> : <button>-</button>}
                    <h3>{countMap[i] || 0}</h3>
                    <button onClick={() => handleUp(i, n.description, n.priceInCents)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Combo);
