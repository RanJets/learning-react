//IN this Lesson I used useEffect hook for the life cycle of a component
//the Mount Update and Unmount stages found in the Text.js

import { useState } from "react";
import "./App.css";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {showText ? "Hide Text" : "Show Text"}
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
