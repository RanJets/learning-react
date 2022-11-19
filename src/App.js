import "./App.css";
import { useCalc } from "./useCalc";

function App() {
  const [num, add, subrtact, resetnum] = useCalc();

  return (
    <div className="App">
      <button onClick={add}>Increase</button>
      <button onClick={subrtact}>Decrease</button>
      <button onClick={resetnum}>Reset</button>
      <h1>{num}</h1>
    </div>
  );
}

export default App;
