import { ADD_CARDS, ADD_CARD } from 'src/actions/actionTypes';

const initialState = {
  cards: [],
  card: {}
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case ADD_CARD:
      return {
        ...state,
        card: action.payload
      };
    default:
      return state;
  }
};

export default cardsReducer;
