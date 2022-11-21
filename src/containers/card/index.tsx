import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'src/components/card';
import { addCard } from 'src/redux/actions/cards';
import { CARDS_URL } from 'src/api-config';
import {
  selectCard,
  selectCards,
  selectPokemonFeatures,
  selectTrainerFeatures
} from 'src/redux/selectors/cards';
import useLoadData from 'src/hooks/useLoadData';
import { CARDS, POKEMON } from 'src/utils/constants';

const CardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams() || {};
  const cards = useSelector(selectCards);
  const selectedCard = cards.find(({ id: cardId }) => cardId === id);
  const card = useSelector(selectCard);
  const { name, supertype, imageUrl } = card;

  const getFeatures = (feat, name) => (
    <div key={feat}>
      <p>{feat}</p>: {name}
    </div>
  );

  const trainerFeatures = useSelector(selectTrainerFeatures).map(({ feat, name }) =>
    getFeatures(feat, name)
  );
  const pokemonFeatures = useSelector(selectPokemonFeatures).map(({ feat, name }) =>
    getFeatures(feat, name)
  );

  const features = supertype === POKEMON ? pokemonFeatures : trainerFeatures;

  useLoadData({
    url: `${CARDS_URL}?id=${id}`,
    model: CARDS,
    action: addCard,
    needRender: !selectedCard
  });

  useEffect(() => {
    if (selectedCard) {
      dispatch(addCard(selectedCard));
    }
  }, [dispatch, selectedCard]);

  return <Card name={name} features={features} imageUrl={imageUrl} />;
};

export default CardContainer;
