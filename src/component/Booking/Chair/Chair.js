import React, { useContext, useEffect, useState } from "react";
import "./Chair.scss";
import { BookingContext } from "../../context/BookingContext";
const api = "https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/booking/detail";
function Chair() {
  const [ls, setLs] = useState([]);
  const [seat, setSeat] = useState([]);
  const [structure, setStructure] = useState({
    row: 0,
    col: 0,
  });
  const abortController = new AbortController();

  const { bookData, SetBookData } = useContext(BookingContext);
  useEffect(() => {
    fetch(api, { signal: abortController.signal })
      .then((res) => res.json())
      .then((dt) => {
        let [normalSeat, coupleSeat] = dt.seatPlan.seatLayoutData.areas;
        setSeat([...coupleSeat.rows, ...normalSeat.rows]);
        setLs(
          [...coupleSeat.rows, ...normalSeat.rows].map((n) =>
            n.seats.map((n) => ({
              row: n.position.rowIndex,
              col: n.position.columnIndex,
            }))
          )
        );
        setStructure({
          row: normalSeat.rowCount + coupleSeat.rowCount,
          col: normalSeat.columnCount,
        });
        if (dt.seatPlan != null) {
          fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/TicketByShowCode/${bookData.ShowCode}`, {
            signal: abortController.signal,
          })
            .then((res) => res.json())
            .then((dt) => {
              dt?.map((n) => {
                try {
                  JSON.parse(n.SeatCode).map((m) => {
                    if (document.getElementById(m) != null) {
                      document.getElementById(m).disabled = true;
                    }
                  });
                } catch (err) {
                  console.log(err);
                }
              });
            })
            .catch();
        }
      })
      .catch();
    return () => {
      abortController.abort();
    };
  }, []);
  const HandelChair = (physicalName, col, price) => {
    let seat = physicalName + col;
    if (!bookData.SeatCode.includes(seat)) {
      console.log(physicalName);
      physicalName !== "P" ? document.getElementById(seat)?.classList?.add("isHave") : document.getElementById(seat)?.classList?.add("dbIshave");
      //document.getElementById(seat)?.classList?.add("isHave");
      SetBookData((pre) => ({ ...pre, SeatCode: [...pre.SeatCode, seat] }));
      SetBookData((pre) => ({ ...pre, Price: price + pre.Price }));
    } else {
      physicalName !== "P" ? document.getElementById(seat)?.classList?.remove("isHave") : document.getElementById(seat)?.classList?.remove("dbIshave");
      // document.getElementById(seat)?.classList?.remove("isHave");
      SetBookData((pre) => ({ ...pre, SeatCode: pre.SeatCode.filter((n) => n !== seat) }));
      SetBookData((pre) => ({ ...pre, Price: pre.Price - price }));
    }
  };
  useEffect(() => {
    if (bookData) {
      bookData.SeatCode?.map((n) => {
        console.log(n.charAt(0) == "P");
        n.charAt(0) !== "P" ? document.getElementById(n)?.classList?.add("isHave") : document.getElementById(n)?.classList?.add("dbIshave");
      });
    }
  });
  return (
    <div className="Chair">
      <div>
        {Array(structure.row)
          .fill(0)
          ?.map((n, i) => {
            return (
              <div key={i}>
                <div className="all">
                  <p className="chu">{seat[i].physicalName}</p>
                  <div className="ghe">
                    {Array(structure.col)
                      .fill(0)
                      .map((n, j) => {
                        let priceTicket = seat[i].physicalName == "P" ? 15000 : 6500;
                        let DoubleSeat = seat[i].physicalName == "P" ? "doubleSeat" : "";
                        return (
                          <button
                            key={j}
                            id={seat[i].physicalName + (j + 1)}
                            onClick={() => HandelChair(seat[i].physicalName, j + 1, priceTicket)}
                            className={`${!ls[i].find((k) => k.col === j) ? "non-border" : ""} ${DoubleSeat}`}
                          >
                            <span className="num">{j + 1}</span>
                          </button>
                        );
                      })}
                  </div>
                  <p className="chu">{seat[i].physicalName}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default React.memo(Chair);
