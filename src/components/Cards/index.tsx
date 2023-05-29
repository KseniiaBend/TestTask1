import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { CARDS } from 'src/utils/constants';

type Card = {
  name: string;
  imageUrl: string;
  id: string;
};

interface ICards {
  cards: Card[];
}

const CardsComponent = ({ cards }: ICards) => (
  <div className="cardContainer">
    {cards.map((card) => {
      const { id, imageUrl, name } = card;

      return (
        <Link className="card link" to={`/${CARDS}/card/${id}`} key={id}>
          <img alt={name} src={imageUrl} />
        </Link>
      );
    })}
  </div>
);

export default CardsComponent;
