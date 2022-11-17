import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const fetchData = () => {
    Axios.get(`https://api.genderize.io/?name=${name}`).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="App">
      <div>
        <input onChange={(event) => setName(event.target.value)} />
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      <div>
        <p>{data?.count}</p>
        <p>{data?.gender}</p>
        <p>{data?.name}</p>
        <p>{data?.probability}</p>
      </div>
    </div>
  );
}

export default App;
