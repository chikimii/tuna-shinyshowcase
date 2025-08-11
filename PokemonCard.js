import React from 'react';
import './pokedex-theme.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokedex-card">
      <img className="pokemon-sprite" src={pokemon.spriteUrl} alt={pokemon.species} />
      <div className="card-info">
        <h3>{pokemon.species}</h3>
        <p>Dex #: {pokemon.dexNumber}</p>
        <p>Caught: {pokemon.caughtDate}</p>
        <p>OT: {pokemon.originalTrainer}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
