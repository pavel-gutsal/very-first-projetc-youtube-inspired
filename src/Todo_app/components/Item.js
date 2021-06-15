import React ,{useEffect, useState} from 'react';

const Item =(props)=>{
    
    const completeHandler=()=>{
        console.log(props.todo)
        props.setTodos(props.todos.map(el=>{
            if(el.id===props.todo.id){
               return{...el , complete:!el.complete}
            }
            return el
        }));
    }

    const deleteHandler=()=>{
        
        props.setTodos(props.todos.map(el=>{
            if(el.id===props.todo.id){
               return{...el , hidden:true}
            }
            return el
        }));
      
        console.log('---',props.todo)
       setTimeout(()=>{props.setTodos(props.todos.filter(el=>el.id!==props.todo.id));},1000) 
    }

    return(
        <div className={`item ${props.todo.hidden ? 'item-hidden':""}`}>
            <h1 className={`Item-text ${props.todo.complete ? `item-text-completed` :''}`}>{props.text}</h1>
            <button className={`completed-btn item-btn ${props.todo.complete ? `item-btn-completed` :''}`}
                    onClick={completeHandler}
                    ><i className="fas fa-check-circle"></i></button>
            <button className="trash-btn item-btn"
                    onClick={deleteHandler}
                    ><i className="fas fa-times-circle"></i></button>
        </div>
    );
}
export default Item;