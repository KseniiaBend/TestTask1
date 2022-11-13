import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setLoading, setError } from 'src/actions/app';

const useLoadData = ({ url, model, action }) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setError({ hasError: false, errorStatus: '' }));

    const response = await fetch(url);

    if (response.ok) {
      return await response.json().then((data) => {
        dispatch(action(data[model]));
        dispatch(setLoading(false));
      });
    }

    dispatch(setLoading(false));
    dispatch(setError({ hasError: true, errorStatus: String(response.status) }));
  }, [action, dispatch, model, url]);

  useEffect(() => {
    fetchData().catch();
  }, [fetchData]);
};

export default useLoadData;
