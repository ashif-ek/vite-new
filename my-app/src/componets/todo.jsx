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
                className='' />
            <button
            className=''
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



















// import { useState } from 'react';

// function Todo() {
//     const [tasks, setTasks] = useState(["Complete project proposal", "Review design mockups"]);
//     const [newTask, setNewTask] = useState("");
//     const [isFocused, setIsFocused] = useState(false);

//     function handleInput(e) {
//         setNewTask(e.target.value);
//     }

//     function addTask() {
//         if (newTask.trim()) {
//             setTasks(tasks => [...tasks, newTask]);
//             setNewTask("");
//         }
//     }

//     function deleteTask(index) {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks);
//     }

//     return (
//         <div className="max-w-lg mx-auto p-8  border-gray-100" >
//             <div className="flex items-center mb-8">
//                 <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                     <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//                 </svg>
//                 <h1 className="text-3xl font-semibold text-gray-800">Task Manager</h1>
//             </div>
            
//             <div className={`flex items-center mb-8 p-1 rounded-lg transition-all duration-200 ${isFocused ? 'bg-blue-50 ring-2 ring-blue-500' : 'bg-gray-50'}`}>
//                 <input
//                     type="text"
//                     placeholder="What needs to be done?"
//                     onChange={handleInput}
//                     value={newTask}
//                     className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//                     onKeyPress={(e) => e.key === 'Enter' && addTask()}
//                     onFocus={() => setIsFocused(true)}
//                     onBlur={() => setIsFocused(false)}
//                 />
//                 <button
//                     onClick={addTask}
//                     disabled={!newTask.trim()}
//                     className={`px-5 py-3 rounded-lg font-medium transition-all ${newTask.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
//                 >
//                     Add Task
//                 </button>
//             </div>
            
//             <div className="space-y-3">
//                 {tasks.length === 0 ? (
//                     <div className="text-center py-12">
//                         <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                         </svg>
//                         <h3 className="mt-4 text-lg font-medium text-gray-700">No tasks yet</h3>
//                         <p className="mt-1 text-gray-500">Add your first task to get started</p>
//                     </div>
//                 ) : (
//                     <ol className="divide-y divide-gray-200">
//                         {tasks.map((taskItem, index) => (
//                             <li 
//                                 key={index}
//                                 className="group py-4 px-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
//                             >
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center">
//                                         <button className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center hover:border-blue-500 transition-colors">
//                                             <svg className="w-3 h-3 text-blue-600 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                             </svg>
//                                         </button>
//                                         <span className="text-gray-800">{taskItem}</span>
//                                     </div>
//                                     <button 
//                                         onClick={() => deleteTask(index)}
//                                         className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ol>
//                 )}
//             </div>
            
//             {tasks.length > 0 && (
//                 <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
//                     <span>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
//                     <button 
//                         onClick={() => setTasks([])}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                     >
//                         Clear all
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Todo;



