import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  const getCategory = (catname) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${catname}/`).then(
      (res) => {
        setCategory(res.data[0]);
      }
    );
  };

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => getCategory("party")}> Party</button>
      <button onClick={() => getCategory("family")}> Family</button>
      <button onClick={() => getCategory("office")}> Office </button>

      <p> {category?.excuse} </p>
      <p> {category?.category} </p>
    </div>
  );
}

export default App;
