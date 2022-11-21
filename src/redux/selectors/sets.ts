import { createSelector } from 'reselect';

export const selectPage = (state: any): any => state.sets;
export const selectSets = createSelector(selectPage, (page) => page);
