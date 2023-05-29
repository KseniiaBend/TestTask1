import React from 'react';
import { useSelector } from 'react-redux';

import { SETS_URL } from 'src/api-config';
import SetsComponent from 'src/components/Sets';
import { SETS } from 'src/utils/constants';
import useLoadData from 'src/hooks/useLoadData';
import { addSets } from 'src/redux/actions/sets';
import { selectSets } from 'src/redux/selectors/sets';
import { getUrl } from 'src/helpers/url';

const SetsContainer = () => {
  const sets = useSelector(selectSets);

  useLoadData({ url: getUrl(SETS_URL), model: SETS, action: addSets, needRequest: !sets.length });

  return <SetsComponent sets={sets} />;
};

export default SetsContainer;
