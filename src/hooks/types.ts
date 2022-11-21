/* eslint no-unused-vars: 0 */
import { defaultAction } from 'src/redux/actions/types';

export interface useLoadDataProps {
  action: (payload: any) => defaultAction;
  url: string;
  model: string;
  needRender?: boolean;
}
