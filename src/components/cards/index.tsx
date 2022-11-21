import React from 'react';
import './styles.css';
import { Cards } from './types';
import { Link } from 'react-router-dom';
import { CARDS } from 'src/utils/constants';

const CardsComponent = ({ cards }: Cards) => (
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
