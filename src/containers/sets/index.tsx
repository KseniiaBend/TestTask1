import React from 'react';
import { useSelector } from 'react-redux';

import { SETS_URL } from 'src/api-config';
import SetsComponent from 'src/components/sets';
import { SETS } from 'src/utils/constants';
import useLoadData from 'src/hooks/useLoadData';
import { addSets } from 'src/redux/actions/sets';
import { selectSets } from 'src/redux/selectors/sets';

const SetsContainer = () => {
  const sets = useSelector(selectSets);

  useLoadData({ url: SETS_URL, model: SETS, action: addSets });

  return <SetsComponent sets={sets} />;
};

export default SetsContainer;
