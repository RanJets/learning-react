//trying to create one liner codes
//trying to do components

import "./App.css";
import { FormInfo, TableInfo } from "./Info";
import { useState } from "react";

function App() {
  const [information, setInformation] = useState([]);
  const [newAge, setNewAge] = useState(0);
  const [newName, setNewName] = useState("");

  const addInformation = () => {
    const newInfo = {
      id:
        information.length == 0
          ? 1
          : information[information.length - 1].id + 1,
      name: newName,
      age: newAge,
    };
    setInformation([...information, newInfo]);
  };

  const deleteInfo = (id) => {
    setInformation(information.filter((info) => info.id !== id));
  };

  return (
    <div className="App">
      <FormInfo
        setNewName={setNewName}
        setNewAge={setNewAge}
        addInformation={addInformation}
      />
      <TableInfo information={information} deleteInfo={deleteInfo} />
    </div>
  );
}

export default App;
