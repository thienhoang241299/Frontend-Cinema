import { applyMiddleware, combineReducers, createStore } from "redux";
import rdcCinema from "./reducer/rdcCinema";
import saCinema from "./saga/saCinema";
import saga from "redux-saga";
import rdcMovie from "./reducer/rdcFilm";
import rdcCity from "./reducer/rdcCity";
import rdcBooking from "./reducer/rdcBooking";
const MySaga = saga();
const globalState = combineReducers({
  cinemaManage: rdcCinema,
  movieManage: rdcMovie,
  cityManage: rdcCity,
  bookingManage: rdcBooking,
});

const store = createStore(globalState, applyMiddleware(MySaga));
export default store;
MySaga.run(saCinema);
