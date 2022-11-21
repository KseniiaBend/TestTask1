import { createSelector } from 'reselect';

export const selectPage = (state: any): any => state.app;

export const selectIsLoading = createSelector(selectPage, ({ isLoading }) => isLoading);
export const selectHasError = createSelector(selectPage, ({ hasError }) => hasError);
export const selectErrorStatus = createSelector(selectPage, ({ errorStatus }) => errorStatus);
