import React from "react";
import "./cards.css";
const Cards = ({ pokemon, pokemonType }) => {
  function padPokemonId(id) {
    if (id < 10) {
      return String(id).padStart(3, 0);
    }
    if (id >= 10 && id < 100) {
      return String(id).padStart(3, 0);
    }
    return id;
  }
  const paddedId = padPokemonId(pokemon.id);
  const renderType = pokemon.type.map((type) => (
    <div
      className="pokemonTypeDiv"
      style={{
        backgroundColor: pokemonType.find((x) => x.english === type).background,
      }}
      key={undefined}
    >
      {type}
    </div>
  ));

  return (
    <div className="itemCard">
      <div className="card-body">
        <div className="cardHeader">
          <div className="infoRow">
            <h3>{pokemon.name.english}</h3>
          </div>
          <div className="infoRow">
            <h6>#{paddedId}</h6>
          </div>
          <div className="infoRow">{renderType}</div>
        </div>
        <div className="pokemonImage">
          <img
            className="card-img-top"
            src={require("../images/" + paddedId + ".png")}
            alt="Pokemon"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
