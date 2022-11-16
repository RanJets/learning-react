import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((tasks) => tasks.id != id));
    //const newTodoList = todoList.filter((task) => {
    //return task != taskName; //This code is equivalent to the code below. It automatically returns true for this comparison operator.
    /*
      if (task == taskName) {
        return false;
      } else {
        return true;
      }*/
    //});
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((tasks) => {
          return (
            <Task
              taskName={tasks.taskName}
              id={tasks.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
