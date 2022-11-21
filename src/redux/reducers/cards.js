import { ADD_CARDS, ADD_CARD } from 'src/redux/actions/actionTypes';

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
    case ADD_CARD: {
      const { payload } = action;
      return {
        ...state,
        card: Array.isArray(payload) ? payload[0] : payload
      };
    }
    default:
      return state;
  }
};

export default cardsReducer;
