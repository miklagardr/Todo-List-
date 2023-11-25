import React from "react";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Todo from "./todo";

function TodoWrapper() {
    const [todos,setTodos] = useState([])
    const addTodo = todo =>{
        setTodos([...todos,{id:Math.floor(Math.random() * 100), task :todo, completed:false}])
      
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
        }
        const completeTodo = id =>{
            setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed} : todo ) )
    
        }
    
    return ( 
        <div className="TodoWrapper">
            <h1 className="header">To Do List</h1>
            
            {todos.map((todo)=>(
                <Todo task={todo} key={todo.id} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            ))}
            <TodoForm addTodo = {addTodo}/>
           

        </div>
     );
}

export default TodoWrapper;