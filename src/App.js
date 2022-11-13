import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Rhandell" age={21} email="del@del.com" />
      <User name="Russel" age={22} email="sel@sel.com" />
      <User name="Ynah" age={14} email="ynah@ynah.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
