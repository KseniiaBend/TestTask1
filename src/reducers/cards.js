import { ADD_CARDS } from "../actions/actionTypes";

const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARDS:
      return action.payload;
    default:
      return state;
  }
};

export default cardsReducer;
