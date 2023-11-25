import React from 'react';
import TodoForm from './TodoForm';

<i style={{padding:5}} className="fa-solid fa-check"></i>
function Todo({task , deleteTodo ,completeTodo}) {
   
    return ( 
        <div className="Todo">
                <li className={`${task.completed ? 'completed':""}`} ><button id='btn' onClick={() => completeTodo(task.id)}  ><i style={{padding:5}} className="fa-solid fa-check"></i></button>{task.task}</li>
               
                <button className='delete-icon' onClick={() => deleteTodo(task.id)}><i class="fa-solid fa-x"></i></button>
        </div>
     );
}
export default Todo;