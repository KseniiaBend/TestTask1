import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setLoading, setError } from 'src/redux/actions/app';
import { NOT_FOUND } from 'src/utils/constants';
import { useLoadDataProps } from './types';
import { selectHasError } from 'src/redux/selectors/app';

const useLoadData = ({ url, model, action, needRender = true }: useLoadDataProps): void => {
  const dispatch = useDispatch();
  const hasError = useSelector(selectHasError);

  const fetchData = useCallback(async () => {
    dispatch(setLoading(true));
    if (hasError) {
      dispatch(setError({ hasError: false, errorStatus: '' }));
    }

    const response = await fetch(url);

    if (response.ok) {
      return await response.json().then((data) => {
        dispatch(action(data[model]));
        dispatch(setLoading(false));
      });
    }

    dispatch(setLoading(false));
    dispatch(setError({ hasError: true, errorStatus: String(response.status) }));
  }, [action, dispatch, hasError, model, url]);

  useEffect(() => {
    if (!needRender) return;

    fetchData().catch(() => dispatch(setError({ hasError: true, errorStatus: NOT_FOUND })));
  }, [fetchData, needRender, dispatch]);
};

export default useLoadData;
