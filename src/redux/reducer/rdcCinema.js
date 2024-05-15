import { SET_CINEMA } from "../action/actCinema";

const initialState = {
  lsCinema: [],
};
const rdcCinema = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CINEMA:
      return {
        ...state,
        lsCinema: payload,
      };

    default:
      return state;
  }
};
export default rdcCinema;
