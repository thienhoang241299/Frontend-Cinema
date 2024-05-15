import { DOWN, SET_COUNT, UP } from "../action/actBooking";

const initialState = {
  countMap: {},
};

const rdcBooking = (state = initialState, { type, payload }) => {
  switch (type) {
    case UP:
      return {
        ...state,
        countMap: {
          ...state.countMap,
          [payload.index]: (state.countMap[payload.index] || 0) + 1,
        },
      };
    case DOWN:
      if (state.countMap[payload.index] < 1) {
        return state;
      }
      return {
        ...state,
        countMap: {
          ...state.countMap,
          [payload.index]: state.countMap[payload.index] - 1,
        },
      };
    case SET_COUNT:
      return {
        ...state,
        countMap: payload,
      };
    default:
      return state;
  }
};

export default rdcBooking;
