import { ADD_SETS } from "./actionTypes";

export const addSets = sets => ({
  type: ADD_SETS,
  payload: sets.reverse()
});
