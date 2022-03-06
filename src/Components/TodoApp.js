import React, {useState} from 'react';
import './TodoApp.css';

function TodoApp() {
    const [task, setTask] = useState();
    const [tasklist, setTasklist] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const addTask = () => {
        if (task !== ""){
            const tasks = {
                id: Math.ceil(Math.random() * 1000),
                value: task,
                isDone: false,
            }
            setTasklist([...tasklist, tasks])
        }

    }

    const deletetask = (e,id) => {
        e.preventDefault();
        setTasklist(tasklist.filter((t) => t.id !== id));
    }

    const taskCompleted = (e, id) => {
        e.preventDefault();
        const element = tasklist.findIndex((elem) => elem.id == id);
        const newTaskList = [...tasklist];
        
        newTaskList[element]= {
            ...newTaskList[element],
            isDone: true,
        }
        setTasklist(newTaskList);
    }
  return (
    <div className = 'hero'>
        <input
        type = 'text'
        className='input_area'
        name = 'text'
        id = 'text'
        placeholder='Enter task...'
        onChange={(e)=> handleChange(e)}/>
        <button className='add' onClick={addTask}>ADD</button>
            <br/>

        {tasklist !== [] ?

        <ul>
            {tasklist.map(t =>
                <li>
                {t.value}

                <button className='completed' onClick={(e) => taskCompleted(e, t.id)}>COMPLETED</button>

                <button className= 'delete' onClick={(e) => deletetask(e, t.id)}>DELETE</button>
                
                </li>
                )}
        </ul>

        : null}
    </div>
  )
}

export default TodoApp