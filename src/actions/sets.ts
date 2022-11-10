import { defaultAction } from 'src/types/actions';
import { ADD_SETS } from './actionTypes';

export const addSets = (sets): defaultAction => ({
  type: ADD_SETS,
  payload: sets.reverse()
});
