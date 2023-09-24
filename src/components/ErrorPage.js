import React from "react";

const NoResultFound = ({ message }) => {
  const style = {
    height: "100px",
  };
  return (
    <div style={style}>
      <h5 style={{ marginTop: "2.5rem" }}>{message}</h5>
    </div>
  );
};

export default NoResultFound;
