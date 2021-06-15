import React ,{useState} from 'react';
 import Item from './Item';

const List =(props)=>{

    return(
        <div className="list">
            {props.filterTodos.map(todo=>(
                  <Item todo={todo} text={todo.text} setTodos={props.setTodos} todos={props.todos}/>
            ))}
        </div>
    );
}
export default List;