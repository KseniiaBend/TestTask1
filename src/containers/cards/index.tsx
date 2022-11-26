import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addCards, addCurrentSetCode } from 'src/redux/actions/cards';
import { CARDS_URL } from 'src/api-config';
import CardsComponent from 'src/components/cards';
import useLoadData from 'src/hooks/useLoadData';
import { CARDS } from 'src/utils/constants';
import { selectCards, selectSetCode } from 'src/redux/selectors/cards';
import { getUrl } from 'src/helpers/url';

const CardsContainer = () => {
  const [needRequest, setNeedRequest] = useState(false);
  const dispatch = useDispatch();
  const { setCode } = useParams() || {};
  const cards = useSelector(selectCards);
  const code = useSelector(selectSetCode);

  useLoadData({
    url: getUrl(CARDS_URL, { setCode }),
    model: CARDS,
    action: addCards,
    needRequest
  });

  useEffect(() => {
    if (code) setNeedRequest(!cards.length);
  }, [cards.length, code]);

  useEffect(() => {
    dispatch(addCurrentSetCode(setCode));

    return () => {
      dispatch(addCurrentSetCode(''));
    };
  }, [dispatch, setCode]);

  return <CardsComponent cards={cards} />;
};

export default CardsContainer;
