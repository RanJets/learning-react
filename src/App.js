import "./App.css";
/*
 *Learning how to import from other created file inside src folder
 *In import { User } from "./User"; the {User} is the name of component
 *and the "./User" is the name of the file
 */
import { User } from "./User";
//Using Object in array with the method .map to loop all array
function App() {
  const users = [
    { name: "pedro", age: 20 },
    { name: "juan", age: 23 },
    { name: "manuel", age: 26 },
    { name: "miguel", age: 15 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
