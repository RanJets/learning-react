import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Dell"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "jake", "jerry", "jasmine"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
