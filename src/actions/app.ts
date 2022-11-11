import { defaultAction, errorAction } from 'src/types/actions';
import { SET_LOADING, SET_ERROR } from './actionTypes';

export const setLoading = (state): defaultAction => ({
  type: SET_LOADING,
  payload: state
});

export const setError = (hasError, errorStatus): errorAction => ({
  type: SET_ERROR,
  hasError,
  errorStatus
});
