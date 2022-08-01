import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [tasks,setTasks]=useState(
    [
        {
            id:1,
            text:'doctors appointment',
            day: 'feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text:'teachers appointment',
            day: 'feb 6th at 2:30pm',
            reminder: true,
        },
    ]
  )
  //delete task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=> task.id!==id));
  }

  //add task
  const addTask=(task)=>{
      const id=Math.floor(10000*Math.random())+1;
      
      const newTask={id ,...task}
      console.log(newTask);
      setTasks([...tasks,newTask]);
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to show'}
      
      
      
    </div>
  );
}


export default App;
