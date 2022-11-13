import "./App.css";
import { Planet } from "./Planets";
function App() {
  const planets = [
    { name: "Mercury", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        //Ternary Operator sample using  ? : if-else
        return <Planet name={!planet.isGasPlanet ? planet.name : ""} />;
      })}
      {planets.map(
        //Ternary Operator sample using  && as then
        (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
