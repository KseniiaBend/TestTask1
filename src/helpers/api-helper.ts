import { setLoading } from 'src/actions/app';
import { handleFetchProps } from 'src/types/api';

export const handleFetch = async ({
  dispatch,
  action,
  url,
  type
}: handleFetchProps): Promise<any> => {
  dispatch(setLoading(true));
  const response = await fetch(url);

  if (response.ok) {
    return await response.json().then((data) => {
      dispatch(action(data[type]));
      dispatch(setLoading(false));
    });
  }
  dispatch(setLoading(false));
  throw new Error(`An error has occurred: ${response.status}`);
};
