import { defaultAction } from 'src/types/actions';
import { SET_LOADING } from './actionTypes';

export const setLoading = (state): defaultAction => ({
  type: SET_LOADING,
  payload: state
});
