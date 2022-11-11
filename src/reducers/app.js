import { SET_LOADING, SET_ERROR } from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_ERROR: {
      const { hasError, errorStatus } = action;

      return {
        ...state,
        hasError,
        errorStatus
      };
    }
    default:
      return state;
  }
};

export default appReducer;
