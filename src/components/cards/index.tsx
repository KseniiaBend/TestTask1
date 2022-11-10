import React from 'react';
import './styles.css';
import { Cards } from './types';

const CardsComponent = ({ cards }: Cards) => (
  <div className="cardContainer">
    {cards.map((card) => {
      const { id, imageUrl, name } = card;

      return (
        <div className="card" key={id}>
          <img alt={name} src={imageUrl} />
        </div>
      );
    })}
  </div>
);

export default CardsComponent;
