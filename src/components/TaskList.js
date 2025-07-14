import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default TaskList;
