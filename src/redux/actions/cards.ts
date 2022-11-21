import { defaultAction } from './types';
import { ADD_CARDS, ADD_CARD } from './actionTypes';

export const addCards = (cards): defaultAction => ({
  type: ADD_CARDS,
  payload: cards
});

export const addCard = (card): defaultAction => ({
  type: ADD_CARD,
  payload: card
});
