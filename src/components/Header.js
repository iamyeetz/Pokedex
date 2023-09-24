import React, { useEffect, useState } from "react";
import PokeTypeCheckbox from "./PokeTypeCheckbox";
import "./header.css";
const Header = ({
  pokemonType,
  handleSearch,
  setName,
  setTypeFilters,
  handleKeyPress,
}) => {
  const inputStyle = {
    margin: "20px",
    width: "50%",
    height: "40px",
    borderRadius: "40px",
    textAlign: "center",
  };

  const renderPokeTypeCheckbox = pokemonType.map((item) => (
    <PokeTypeCheckbox
      pokemonType={item}
      key={item.english}
      setTypeFilters={setTypeFilters}
    />
  ));

  return (
    <>
      <div className="header">
        <div className="searchBox">
          <input
            style={inputStyle}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
            type="text"
            placeholder="Search Pokemon"
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="filterDiv">{renderPokeTypeCheckbox}</div>
      </div>
    </>
  );
};

export default Header;
