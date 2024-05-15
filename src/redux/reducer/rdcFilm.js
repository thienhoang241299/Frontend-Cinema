import { SET_FILM, SET_MOVIE } from "../action/actFilm";

const initialState = {
  lsMovie: [],
  film: {},
};
const rdcMovie = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE:
      return {
        ...state,
        lsMovie: payload,
      };
    case SET_FILM:
      return {
        ...state,
        film: payload,
      };
    default:
      return state;
  }
};

export default rdcMovie;
