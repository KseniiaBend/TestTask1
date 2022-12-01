import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'src/components/card';
import { addCard, addCurrentSetCode } from 'src/redux/actions/cards';
import { CARDS_URL } from 'src/api-config';
import {
  selectCard,
  selectCards,
  selectPokemonFeatures,
  selectTrainerFeatures
} from 'src/redux/selectors/cards';
import useLoadData from 'src/hooks/useLoadData';
import { CARDS, POKEMON } from 'src/utils/constants';
import { getUrl } from 'src/helpers/url';

const CardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams() || {};
  const cards = useSelector(selectCards);
  const selectedCard = cards.find(({ id: cardId }) => cardId === id);
  const card = useSelector(selectCard);
  const { name, supertype, imageUrl } = card;

  const getFeature = ({ feat, name }) => (
    <div key={feat}>
      <p>{feat}</p>: {name}
    </div>
  );

  const trainerFeatures = useSelector(selectTrainerFeatures).map(getFeature);
  const pokemonFeatures = useSelector(selectPokemonFeatures).map(getFeature);

  const features = supertype === POKEMON ? pokemonFeatures : trainerFeatures;

  useLoadData({
    url: getUrl(CARDS_URL, { id }),
    model: CARDS,
    action: addCard,
    needRequest: !selectedCard
  });

  useEffect(() => {
    if (selectedCard) {
      dispatch(addCard(selectedCard));
      dispatch(addCurrentSetCode(selectedCard.setCode));
    }

    return () => {
      dispatch(addCurrentSetCode(''));
    };
  }, [dispatch, selectedCard]);

  return <Card name={name} features={features} imageUrl={imageUrl} />;
};

export default CardContainer;
