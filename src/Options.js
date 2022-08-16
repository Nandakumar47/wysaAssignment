import React from "react";
import "./Options.css";
function Options({ text, colors, clicked }) {
  return (
    <button
      className="Option_main"
      style={{ backgroundColor: colors }}
      value={text}
      onClick={(e) => {
        clicked(e.target.value);
      }}
    >
      {text}
    </button>
  );
}

export default Options;
