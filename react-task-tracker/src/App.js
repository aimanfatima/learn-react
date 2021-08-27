import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      text:'Reminder 1',
      day:'July 9th at 10 am',
      reminder:'true'
    },
    {
        id:'2',
        text:'Reminder 2',
        day:'July 9th at 11 am',
        reminder:'true'
    },
    {
        id:'3',
        text:'Reminder 3',
        day:'July 9th at 1 pm',
        reminder:'false'
    },
    {
        id:'4',
        text:'Reminder 4',
        day:'July 9th at 2 pm',
        reminder:'false'
    }
  ])

  return (
    <div className="container">
      <Header title="Task tracker App"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
