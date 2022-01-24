import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#F15025").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color shades</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
