import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("red"); //useState to change CSS
  const [showText, setShowText] = useState(false); //useState to work with boolean
  const [changeValue, setChangeValue] = useState(""); //useState to work with String
  const [incrementNumber, setIncrementNumber] = useState(0); //useState to work with integer

  return (
    <div className="App">
      {/* useState to change CSS */}
      <button
        onClick={() => {
          setTextColor(textColor == "black" ? "red" : "black");
        }}
      >
        Turn the text into {textColor == "red" ? "black" : "red"}
      </button>
      <h1 style={{ color: textColor }}>This is a text</h1>

      {/* useState to work with boolean */}
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Click here to {showText ? "hide" : "show"} text
      </button>
      {showText && <h1>This is Show and Hide Text</h1>}
      <br />
      <br />

      {/* useState to work with String */}
      <input
        placeholder="Type to Create text"
        type="text"
        onChange={(event) => {
          setChangeValue(event.target.value);
        }}
      />
      <h1>{changeValue}</h1>

      {/* useState to work with integer */}
      <button
        onClick={() => {
          setIncrementNumber(incrementNumber + 1);
        }}
      >
        Click me to increment the Number
      </button>
      <h1>{incrementNumber}</h1>
    </div>
  );
}

export default App;
