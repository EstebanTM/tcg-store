// src/components/Home.js
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Reemplaza con la URL de tu API
    fetch('https://api.example.com/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <h1>Tiendita de Cartas de Yu-Gi-Oh!</h1>
      <div className="card-grid">
        {cards.map(card => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
