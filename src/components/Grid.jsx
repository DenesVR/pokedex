import React from "react";
import { Link } from "react-router-dom";

function Grid({ pokemons }) {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <Link to={`/${pokemon.name}`}>
            <li key={index}>{pokemon.name}</li>
            {/* <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
              1}.png`}
          ></img> */}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Grid;
