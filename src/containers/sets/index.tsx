import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addSets } from 'src/actions/sets';
import { handleFetch } from 'src/helpers/api-helper';
import { SETS_URL } from 'src/api-config';
import SetsComponent from 'src/components/sets/SetsComponent';

const SetsContainer = () => {
  const dispatch = useDispatch();
  const sets = useSelector(({ sets }) => sets);

  const fetchSets = useCallback(() => {
    handleFetch({
      dispatch,
      action: addSets,
      url: SETS_URL,
      type: 'sets'
    }).catch();
  }, [dispatch]);

  useEffect(() => {
    fetchSets();
  }, [fetchSets]);

  return <SetsComponent sets={sets} />;
};

export default SetsContainer;
