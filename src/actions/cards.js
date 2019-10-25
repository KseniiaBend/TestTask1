import { ADD_CARDS } from "./actionTypes";

export const addCards = cards => ({
  type: ADD_CARDS,
  payload: cards
});
