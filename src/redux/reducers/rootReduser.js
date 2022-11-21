import { combineReducers } from 'redux';
import appReducer from './app';
import cardsReducer from './cards';
import setsReducer from './sets';

const rootReducer = combineReducers({
  app: appReducer,
  sets: setsReducer,
  cards: cardsReducer
});

export default rootReducer;
