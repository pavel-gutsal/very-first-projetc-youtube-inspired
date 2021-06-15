import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List'
import './Todo_app.css'

const Todo_app =()=>{
  const [text,setText] = useState('');
  const [todos,setTodos] =useState([]);
  const [select ,setSelect] = useState('all');
  const [filterTodos , setFilterTodos] =useState([]);

  useEffect(()=>{
    console.log(select);
    if(select==='completed'){
        setFilterTodos(todos.filter(todo=>todo.complete===true))
    }else if(select==='uncompleted'){
        setFilterTodos(todos.filter(todo=>todo.complete===false))
    }else{
        setFilterTodos(todos)
    }
    console.log(select,filterTodos)
  },[select,todos]);
    return(
        <div className="Todo_app">
            <h1 className="heading">My To do list</h1>
            <Form text={text} setText={setText} setTodos={setTodos} todos={todos} setSelect={setSelect}/>
            <List   setTodos={setTodos} todos={todos} filterTodos={filterTodos}/>
        </div>
    );
}
export default Todo_app;