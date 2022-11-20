import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [obj, setObj] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setObj(res.data);
    });
  }, []);

  return (
    <div className="App">
      {obj &&
        obj.map((data) => {
          return <p>{data.title}</p>;
        })}
    </div>
  );
}

export default App;
