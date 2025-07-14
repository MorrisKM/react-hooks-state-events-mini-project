import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  const handleAddTask = obj => {
    setTasks([...tasks, obj])
  }
  function handleDeleteTask(deletedTask) {
    const taskList = tasks.filter((task) => task.text !== deletedTask)
    setTasks(taskList)
  }
  const displayTaskList = tasks.filter((task) => {
    if (category === 'All') {
      return true
    } else {
      return task.category === category
    }
  })
  console.log(displayTaskList)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategories={category} 
      setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={displayTaskList} handleDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
