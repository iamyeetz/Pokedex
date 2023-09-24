import React from "react";
import Cards from "./Cards";
import ErrorPage from "./ErrorPage";
const PokemonList = ({ pokemonList, pokemonType }) => {
  const style = {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const renderPokemonList = pokemonList.map((item) => (
    <Cards pokemon={item} pokemonType={pokemonType} key={item.id} />
  ));
  return (
    <div style={style}>
      {pokemonList.length <= 0 ? (
        <ErrorPage message={"No Results Found."} />
      ) : (
        renderPokemonList
      )}
    </div>
  );
};

export default PokemonList;
