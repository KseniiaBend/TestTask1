import { ADD_CARDS, ADD_CARD, ADD_CURRENT_SET_CODE } from 'src/redux/actions/actionTypes';

const initialState = {
  cards: {},
  card: {},
  code: ''
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cards: {
          ...state.cards,
          [state.code]: action.payload
        }
      };
    case ADD_CARD: {
      const { payload } = action;
      return {
        ...state,
        card: Array.isArray(payload) ? payload[0] : payload
      };
    }
    case ADD_CURRENT_SET_CODE:
      return {
        ...state,
        code: action.payload
      };
    default:
      return state;
  }
};

export default cardsReducer;
