import { SET_LOADING, SET_ERROR } from 'src/redux/actions/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  errorStatus: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_ERROR: {
      const { hasError, errorStatus } = action.payload;

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
