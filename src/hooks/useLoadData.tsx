/* eslint no-unused-vars: 0 */
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setLoading, setError } from 'src/redux/actions/app';
import { NOT_FOUND } from 'src/utils/constants';

import { defaultAction } from 'src/redux/actions/types';

export interface IUseLoadDataProps {
  action: (payload: any) => defaultAction;
  url: string;
  model: string;
  needRequest: boolean;
}

const useLoadData = ({ url, model, action, needRequest }: IUseLoadDataProps): void => {
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setError({ hasError: false, errorStatus: '' }));

    const response = await fetch(url);

    if (response.ok) {
      return await response.json().then((data) => {
        dispatch(action(data[model]));
      });
    }

    dispatch(setError({ hasError: true, errorStatus: String(response.status) }));
  }, [action, dispatch, model, url]);

  useEffect(() => {
    if (needRequest) {
      fetchData()
        .catch(() => dispatch(setError({ hasError: true, errorStatus: NOT_FOUND })))
        .finally(() => dispatch(setLoading(false)));
    }

    return () => {
      dispatch(setError({ hasError: false, errorStatus: '' }));
    };
  }, [dispatch, fetchData, needRequest]);
};

export default useLoadData;
