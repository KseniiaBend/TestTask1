import { isEmpty } from 'src/helpers/general';
import { paramsProp } from './types';

export const getQueryParams = (params: paramsProp = {}): string => {
  const queryParamsList: string[] = [];
  if (isEmpty(params)) return '';

  for (const key in params) {
    queryParamsList.push(`${key}=${params[key]}`);
  }

  return `?${queryParamsList.join('&')}`;
};

export const getUrl = (url: string, params: paramsProp = {}): string =>
  `${url}${getQueryParams(params)}`;
