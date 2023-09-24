import React from "react";

const PokeTypeCheckbox = ({ pokemonType, setTypeFilters }) => {
  const style = {
    padding: "7px",
    width: "20%",
    marginLeft: "30px",
    color: "white",
  };
  const labelStyle = {
    marginLeft: "5px",
  };

  const handleCheckboxOnChange = (e) => {
    if (e.target.checked) {
      setTypeFilters((prevstate) => [...prevstate, e.target.value]);
    } else {
      setTypeFilters((prevstate) =>
        prevstate.filter((item) => !item.includes(e.target.value))
      );
    }
  };
  return (
    <div style={style}>
      <input
        type="checkbox"
        name={pokemonType.english}
        value={pokemonType.english}
        onChange={(e) => handleCheckboxOnChange(e)}
      />
      <label style={labelStyle}>{pokemonType.english}</label>
    </div>
  );
};

export default PokeTypeCheckbox;
