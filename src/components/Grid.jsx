import React from "react";
import { Link } from "react-router-dom";
import { ListItem, UnorderedList, SimpleGrid } from "@chakra-ui/react";

function Grid({ pokemons }) {
  return (
    <div>
      <UnorderedList>
        <h1>POKEMONS</h1>

        <SimpleGrid columns={3} spacing={10}>
          {pokemons.map(pokemon => (
            <Link to={`/${pokemon.name}`}>
              <ListItem key={pokemon.name}>{pokemon.name}</ListItem>
              {/* <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
              1}.png`}
          ></img> */}
            </Link>
          ))}
        </SimpleGrid>
      </UnorderedList>
    </div>
  );
}

export default Grid;
