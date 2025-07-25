import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const minimize = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
      setTimeout(() => setInput(""), 1000);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly placeholder="0" />

      <div className="buttons">
  <button onClick={handleClear}>AC</button>
  <button onClick={minimize}>C</button>
  <button onClick={() => handleClick("/")}>÷</button>
  <button onClick={() => handleClick("*")}>×</button>

  <button onClick={() => handleClick("7")}>7</button>
  <button onClick={() => handleClick("8")}>8</button>
  <button onClick={() => handleClick("9")}>9</button>
  <button onClick={() => handleClick("-")}>−</button>

  <button onClick={() => handleClick("4")}>4</button>
  <button onClick={() => handleClick("5")}>5</button>
  <button onClick={() => handleClick("6")}>6</button>
  <button
  onClick={() => handleClick("+")}
  style={{ gridRow: 'span 2', height: '115px' }}> + </button>

  <button onClick={() => handleClick("1")}>1</button>
  <button onClick={() => handleClick("2")}>2</button>
  <button onClick={() => handleClick("3")}>3</button>

  <button onClick={() => handleClick("0")}>0</button>
  <button onClick={() => handleClick(".")}>.</button>
  <button onClick={() => handleClick("00")}>00</button>
  <button onClick={handleCalculate}>=</button>
  
</div>
</div>

  );
}

export default App;
