import React from "react";
import "./styles.scss";

const Display = ({ content }) => {
  return (
    <div className="outputScreen" id="display">
      {content}
    </div>
  );
};

export default Display;
