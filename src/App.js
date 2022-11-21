import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Dell"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;

//installing prop-types using npm install prop-types
