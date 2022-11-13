import { defaultAction } from './types';
import { SET_LOADING, SET_ERROR } from './actionTypes';

export const setLoading = (isLoading): defaultAction => ({
  type: SET_LOADING,
  payload: isLoading
});

export const setError = (error): defaultAction => ({
  type: SET_ERROR,
  payload: error
});
