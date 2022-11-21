import { ADD_SETS } from 'src/redux/actions/actionTypes';

const setsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SETS:
      return action.payload;
    default:
      return state;
  }
};

export default setsReducer;
