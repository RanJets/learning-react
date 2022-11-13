import "./App.css";

//Ternary Operator Lesson-2 part-1
function App() {
  const age = 19;
  const isGreen = false;

  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h2>Under Age</h2>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR.</h1>

      {isGreen && <button> This is Green</button>}
    </div>
  );
}

export default App;
