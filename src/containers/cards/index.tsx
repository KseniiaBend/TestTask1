import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { addCards } from 'src/actions/cards';
import { CARDS_URL } from 'src/api-config';
import CardsComponent from 'src/components/cards';
import useLoadData from 'src/hooks/useLoadData';
import { CARDS } from 'src/utils/constants';

const CardsContainer = () => {
  const { setCode } = useParams() || {};
  const cards = useSelector(({ cards }) => cards.cards);

  useLoadData({ url: `${CARDS_URL}?setCode=${setCode}`, model: CARDS, action: addCards });

  return <CardsComponent cards={cards} />;
};

export default CardsContainer;
