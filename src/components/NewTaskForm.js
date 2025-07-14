import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Code'
  })

  let selects = categories.filter(item => item !== 'All');
  function handleChange (e) {
    setNewTask({...newTask, [e.target.name] : e.target.value})
  }
  function handleSubmit (e) {
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {/* render <option> elements for each category here */}
          {selects.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
