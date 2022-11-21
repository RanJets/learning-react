import React from "react";
import "./App.css";
import { Person, Country, Gender } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Dell"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["a",]}
        country={Country.Brazil}
        gender={Gender.f}
      />
    </div>
  );
}

export default App;
