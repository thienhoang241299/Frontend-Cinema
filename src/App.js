import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import "./App.scss";
import Footer from "./component/Footer/Footer";
import Film from "./component/Film/Film";
import LocalCinema from "./component/LocalCinema/LocalCinema";
import { useDispatch } from "react-redux";
import { GET_CINEMA } from "./redux/action/actCinema";
import { GET_MOVIE } from "./redux/action/actFilm";
import FilmDetail from "./component/FilmDetail/FilmDetail";
import { GET_CITY } from "./redux/action/actCity";
import Booking from "./component/Booking/Booking";
import Profile from "./component/Profile/Profile";
import Chair from "./component/Booking/Chair/Chair";
import Combo from "./component/Booking/Combo/Combo";
import { BookProvide } from "./component/context/BookingContext";
import NotFound404 from "./component/NotFound404/NotFound404";
import CommingSoon from "./component/CommingSoon/CommingSoon";
import HistoryTicket from "./component/Profile/HistoryTicket/HistoryTicket";
import Information from "./component/Profile/Information/Information";
import Reward from "./component/Profile/Reward/Reward";
import Policy from "./component/Profile/Policy/Policy";
import Notification from "./component/Profile/Notification/Notification";
function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_MOVIE,
    });
    dispatch({
      type: GET_CINEMA,
    });
    dispatch({
      type: GET_CITY,
    });
    // eslint-disable-next-line
  }, []);
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film" element={<Film />} />
        <Route path="cinema/:idCinema" element={<LocalCinema />}></Route>
        <Route path="movie/:slug" element={<FilmDetail />} />
        <Route
          path="booking"
          element={
            <BookProvide>
              <Booking />
            </BookProvide>
          }
        >
          <Route path="" element={<Chair />} />
          <Route path="combo" element={<Combo />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<Information />} />
          <Route path="history" element={<HistoryTicket />} />
          <Route path="notification" element={<Notification />} />
          <Route path="reward" element={<Reward />} />
          <Route path="policy" element={<Policy />} />
        </Route>
        <Route path="commingSoon" element={<CommingSoon />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
