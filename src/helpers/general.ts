import { objectProp } from './types';

export const isEmpty = (object: objectProp): boolean => Object.keys(object).length === 0;
