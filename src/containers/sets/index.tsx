import React from 'react';
import { useSelector } from 'react-redux';

import { SETS_URL } from 'src/api-config';
import SetsComponent from 'src/components/sets';
import { SETS } from 'src/utils/constants';
import useLoadData from 'src/hooks/useLoadData';
import { addSets } from 'src/actions/sets';

const SetsContainer = () => {
  const sets = useSelector(({ sets }) => sets);

  useLoadData({ url: SETS_URL, model: SETS, action: addSets });

  return <SetsComponent sets={sets} />;
};

export default SetsContainer;
