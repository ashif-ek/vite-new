import { useState } from 'react';



function Todo() {
    const [task, setTask] = useState(["im the first demo", "im the second demo",])
    const [newTask, setNewTask] = useState("")


    function InputHandle(e) {
        setNewTask(e.target.value)

    }

    function addTask() {
        setTask(task=>[...task, newTask])
        setNewTask("")

    }

    function deleteTask(index) {
        const updated = task.filter((_, i)=>i !== index)
        setTask(updated)
        
    }


    return (

        <>
            <input type="text"
                placeholder="add ur task here....."
                onChange={InputHandle}
                value={newTask}
                className='add-bar' />
            <button
                onClick={addTask}>add
            </button>
            <ol>

                {task.map((taskItem, index) =>
                    <li key={index}>
                        <span> {taskItem}</span>
                        <button onClick={() => deleteTask(index)}> delete</button>
                    </li>

                )}
            </ol>
        </>)
}

export default Todo

