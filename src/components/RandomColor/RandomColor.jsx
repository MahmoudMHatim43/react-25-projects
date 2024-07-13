import "./random-color.css";
import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const ranHex = randomHex();
  const ranRGBA = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
  function changeColor(type) {
    type === "hex" ? setColor(ranHex) : setColor(`${ranRGBA}`);
  }
  function randomHex() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, "0")}`;
  }
  function randomRgb() {
    return Math.floor(Math.random() * 256);
  }

  return (
    <div className="main-color" style={{ backgroundColor: color }}>
      <button className="random-color-btn" onClick={() => setType("hex")}>
        Hex Mode
      </button>
      <button className="random-color-btn" onClick={() => setType("rgba")}>
        RGB Mode
      </button>
      <button className="random-color-btn" onClick={() => changeColor(type)}>
        GENERATE
      </button>
      <h1>{color}</h1>
    </div>
  );
}
