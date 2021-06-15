import React , { useEffect, useState } from 'react';

const Form=(props)=>{
    const submit=(e)=>{
        e.preventDefault();
        if(props.text!==''){
            props.setTodos([...props.todos,{text:props.text, complete:false , id:Math.random()*1000}])
            console.log(props.todos)
            props.setText('')
        }
    }
    const selectHandler=(e)=>{
        props.setSelect(e.target.value);
    }
    return(
        <form className="form" onSubmit={submit}>
            <div className="form_search">
            <input type="text" 
                    placeholder="Whats your plan?"
                    className="form_search_input" 
                    onChange={(e)=>{
                        props.setText(e.target.value)
                    }}
                    value={props.text}
                    />
            <button className="form_search_button"><i class="fas fa-plus-circle"></i></button>
            </div>
            <select onChange={selectHandler} className="form_select" >
                <option value="all" className="form_select_option">all</option>
                <option value="uncompleted" className="form_select_option">uncompleted</option>
                <option value="completed" className="form_select_option">completed</option>
            </select>
        </form>
    );
}
export default Form;