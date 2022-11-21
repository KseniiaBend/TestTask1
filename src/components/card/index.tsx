import React from 'react';
import './style.css';
import { Card } from './types';

const CardComponent = ({ imageUrl, name, features }: Card): JSX.Element => {
  return (
    <div className="singleCardContainer flex">
      <div>
        <img alt={name} src={imageUrl} />
      </div>
      <div className="cardInfoContainer flex">{features}</div>
    </div>
  );
};

export default CardComponent;
