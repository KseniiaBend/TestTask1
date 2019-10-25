import { SET_LOADING } from "../actions/actionTypes";

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
    default:
      return state;
  }
};

export default appReducer;
