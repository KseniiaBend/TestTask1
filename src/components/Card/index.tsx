import React from 'react';
import './style.css';

interface ICard {
  name: string;
  imageUrl: string;
  features: JSX.Element[];
}

const CardComponent = ({ imageUrl, name, features }: ICard): JSX.Element => {
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
