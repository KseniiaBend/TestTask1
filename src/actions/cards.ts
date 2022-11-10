import { defaultAction } from 'src/types/actions';
import { ADD_CARDS } from './actionTypes';

export const addCards = (cards): defaultAction => ({
  type: ADD_CARDS,
  payload: cards
});
