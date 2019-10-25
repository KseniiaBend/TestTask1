import React from "react";
import "./styles.css";

const CardsComponent = props => (
  <div className="cardContainer">
    {props.cards.map(card => (
      <div className="card" key={card.id}>
        <img alt={card.name} src={card.imageUrl} />
      </div>
    ))}
  </div>
);

export default CardsComponent;
