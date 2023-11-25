import React from "react";
import { useState } from "react";

function TodoForm({addTodo}) {
    const [value,setValue] = useState(""); 
    const handleSubmit = e =>{
        e.preventDefault();
        setValue("");
        addTodo(value);
      

       
    }

   
    
    return ( 
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="add a new todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          
            ></input>
            <button type="submit" className="todo-btn" >Add todo</button>

        </form>
     );
}

export default TodoForm;