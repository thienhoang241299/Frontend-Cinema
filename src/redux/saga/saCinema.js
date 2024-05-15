import { call, put, takeEvery } from "redux-saga/effects";
import { GET_CINEMA, SET_CINEMA } from "../action/actCinema";
import { GET_FILM, GET_MOVIE, SET_FILM, SET_MOVIE } from "../action/actFilm";
import { async } from "q";
import { GET_CITY, SET_CITY } from "../action/actCity";
const API_DOMAIN = "https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/cinemas";
async function CallCinema() {
  let res = await fetch(API_DOMAIN, {
    headers: {
      accept: "application/json",
    },
  });
  let data = await res.json();
  return data;
}
function* GetCinema({ type, payload }) {
  let data = yield call(CallCinema);
  yield put({ type: SET_CINEMA, payload: data });
}
async function CallMovie() {
  let res = await fetch("https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/nowAndSoon");
  let dt = res.json();
  return dt;
}
function* GetMovie({ type, payload }) {
  let data = yield call(CallMovie);
  yield put({
    type: SET_MOVIE,
    payload: data,
  });
}
async function CallFilm(slug) {
  let res = await fetch(`https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/movieBySlug/${slug}`);
  let data = await res.json();
  console.log();
  return data;
}
function* GetFilm({ type, payload }) {
  let data = yield call(CallFilm, payload);
  yield put({
    type: SET_FILM,
    payload: data,
  });
}

async function CallCity() {
  let res = await fetch("https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema/city");
  let data = await res.json();
  return data;
}
function* GetCity({ type, payload }) {
  let data = yield call(CallCity);
  yield put({ type: SET_CITY, payload: data });
}
function* saCinema() {
  yield takeEvery(GET_CINEMA, GetCinema);
  yield takeEvery(GET_MOVIE, GetMovie);
  yield takeEvery(GET_FILM, GetFilm);
  yield takeEvery(GET_CITY, GetCity);
}
export default saCinema;
