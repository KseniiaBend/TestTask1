/* eslint no-unused-vars: 0 */
import { defaultAction, errorAction } from 'src/types/actions';

export interface handleFetchProps {
  dispatch: (state: defaultAction | errorAction) => void;
  action: (payload: any) => defaultAction;
  url: string;
  type: string;
}
