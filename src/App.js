import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); //array in useState that will handle todo list data storage
  const [newTask, setNewTask] = useState(""); //setting a new task

  const handleChange = (event) => {
    setNewTask(event.target.value); //use 'event.targaet.value' to get the data from the input and store it in new task.
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask]; //spread operator to push or to add data in array.
    setTodoList(newTodoList); //updating to do list by calling the setTodoList function.
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange /*calling the handle Change function*/} />
        <button onClick={addTask /*calling the addTask function*/}>
          Add Task
        </button>
      </div>
      <div className="list">
        {/*using the .map to an array to show the data from array*/}
        {todoList.map((task) => {
          return <h1>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
