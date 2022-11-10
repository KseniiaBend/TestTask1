import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addCards } from 'src/actions/cards';
import { CARDS_URL } from 'src/api-config';
import { handleFetch } from 'src/helpers/api-helper';
import CardsComponent from 'src/components/cards/CardsComponent';

const CardsContainer = () => {
  const { setCode } = useParams() || {};
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards);

  const fetchCardsBySetCode = useCallback(() => {
    handleFetch({
      dispatch,
      action: addCards,
      url: `${CARDS_URL}?setCode=${setCode}`,
      type: 'cards'
    }).catch();
  }, [dispatch, setCode]);

  useEffect(() => {
    fetchCardsBySetCode();
  }, [fetchCardsBySetCode]);

  return <CardsComponent cards={cards} />;
};

export default CardsContainer;
