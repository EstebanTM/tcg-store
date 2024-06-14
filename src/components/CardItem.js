// src/components/CardItem.js
import React from 'react';

const CardItem = ({ card }) => {
  return (
    <div className="card-item">
      <img src={card.imageUrl} alt={card.name} />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      <p>Precio: ${card.price}</p>
    </div>
  );
};

export default CardItem;
