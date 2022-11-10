/* eslint no-unused-vars: 0 */
import { defaultAction } from 'src/types/actions';

export interface handleFetchProps {
  dispatch: (state: defaultAction) => void;
  action: (payload: any) => defaultAction;
  url: string;
  type: string;
}
