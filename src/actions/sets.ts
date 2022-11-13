import { defaultAction } from './types';
import { ADD_SETS } from './actionTypes';

export const addSets = (sets): defaultAction => ({
  type: ADD_SETS,
  payload: sets.reverse()
});
