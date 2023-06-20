import Todo from './components/Todo'
import { useState } from 'react';
function App() {
  //states - add task
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task.value);
    setTasks([...tasks, task]);
    setTask('')
  }
  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
 
  return (
    <section>
      <div className = 'fields'>
        <h1>My Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input required type='text' className='input todo' value={task} onChange={(e)=> setTask(e.target.value) } />
          <button type='submit' className='btn' onClick={handleSubmit}> Add</button>
        </form>
      </div>
      <div className='task-container'>
        
        {tasks.map((task, index) => (
          <Todo key={index} name={task} onDelete={() => handleDeleteTask(index)} />
        ))}
        
      </div>
    </section>
  );
}

export default App;
