import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './pokedex-theme.css';

function App() {
  const [shinies, setShinies] = useState([]);

  useEffect(() => {
    fetch('./shinyData.json')
      .then((res) => res.json())
      .then((data) => setShinies(data));
  }, []);

  return (
    <div className="pokedex-container">
      <h1>PokéMMO Shiny Showcase</h1>
      <div className="pokedex-grid">
        {shinies.map((poke) => (
          <PokemonCard key={poke.dexNumber + poke.caughtDate} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;
