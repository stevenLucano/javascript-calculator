import React from "react";
import Key from "../Key";
import "./styles.scss";

const KeyPad = ({ changeContent }) => {
  return (
    <div className="keyPad">
      <Key color="#ac3939" letter="AC" name="clear" fnc={changeContent} />
      <Key color="#666666" letter="/" name="divide" fnc={changeContent} />
      <Key color="#666666" letter="X" name="multiply" fnc={changeContent} />
      <Key color="#4d4d4d" letter="7" name="seven" fnc={changeContent} />
      <Key color="#4d4d4d" letter="8" name="eight" fnc={changeContent} />
      <Key color="#4d4d4d" letter="9" name="nine" fnc={changeContent} />
      <Key color="#666666" letter="-" name="subtract" fnc={changeContent} />
      <Key color="#4d4d4d" letter="4" name="four" fnc={changeContent} />
      <Key color="#4d4d4d" letter="5" name="five" fnc={changeContent} />
      <Key color="#4d4d4d" letter="6" name="six" fnc={changeContent} />
      <Key color="#666666" letter="+" name="add" fnc={changeContent} />
      <Key color="#4d4d4d" letter="1" name="one" fnc={changeContent} />
      <Key color="#4d4d4d" letter="2" name="two" fnc={changeContent} />
      <Key color="#4d4d4d" letter="3" name="three" fnc={changeContent} />
      <Key color="#4d4d4d" letter="0" name="zero" fnc={changeContent} />
      <Key color="#4d4d4d" letter="." name="decimal" fnc={changeContent} />
      <Key color="#004466" letter="=" name="equals" fnc={changeContent} />
    </div>
  );
};

export default KeyPad;
