import { createSelector } from 'reselect';

export const selectPage = (state: any): any => state.cards;
export const selectCards = createSelector(selectPage, ({ cards }) => cards);
export const selectCard = createSelector(selectPage, ({ card }) => card);
export const selectPokemonWeaknesses = createSelector(selectCard, ({ weaknesses = [] }) =>
  weaknesses.map(({ type }) => type).join(', ')
);
export const selectPokemonTypes = createSelector(selectCard, ({ types = [] }) => types.join(', '));
export const selectSupertype = createSelector(selectCard, ({ supertype }) => supertype);
export const selectName = createSelector(selectCard, ({ name }) => name);

export const selectPokemonFeatures = createSelector(
  selectPokemonWeaknesses,
  selectPokemonTypes,
  selectName,
  selectSupertype,
  (weaknesses, types, name, supertype) => [
    { name: supertype, feat: 'Supertype' },
    { name: name, feat: 'Name' },
    { name: types, feat: 'Types' },
    { name: weaknesses, feat: 'Weaknesses' }
  ]
);
export const selectTrainerFeatures = createSelector(
  selectName,
  selectSupertype,
  (name, supertype) => [
    { name: supertype, feat: 'Supertype' },
    { name: name, feat: 'Name' }
  ]
);
