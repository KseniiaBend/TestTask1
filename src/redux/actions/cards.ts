import { defaultAction } from './types';
import { ADD_CARDS, ADD_CARD, ADD_CURRENT_SET_CODE } from './actionTypes';

export const addCards = (cards): defaultAction => ({
  type: ADD_CARDS,
  payload: cards
});

export const addCard = (card): defaultAction => ({
  type: ADD_CARD,
  payload: card
});

export const addCurrentSetCode = (code): defaultAction => ({
  type: ADD_CURRENT_SET_CODE,
  payload: code
});
