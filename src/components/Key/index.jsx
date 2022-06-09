import React from "react";
import "./styles.scss";

const Key = ({ color, letter, name, fnc }) => {
  return (
    <div
      className="keyButton"
      style={{ background: color }}
      id={name}
      onClick={() => {
        fnc(letter);
      }}
    >
      <h3>{letter}</h3>
    </div>
  );
};

export default Key;
