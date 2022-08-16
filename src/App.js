import React, { useState } from "react";
import Survey from "./Survey";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="inner_div">
        {count !== 0 && (
          <button
            id="prev"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            Prev
          </button>
        )}
        {count !== 2 && (
          <button
            id="next"
            onClick={() => {
              if (count < 2) {
                setCount(count + 1);
              }
            }}
          >
            Next
          </button>
        )}
      </div>
      <Survey Count={count} />
    </div>
  );
}

export default App;
