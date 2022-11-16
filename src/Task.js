export const Task = (props) => {
  return (
    <div>
      <h1>{props.id + " " + props.taskName}</h1>
      <button>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
