import React , {useState} from 'react'

const Comments_toggle_button=(props)=>{

    return(
        <div className="Comments_toggle_button">
            <button className="Comments_toggle_button_button"
                onClick={()=>{props.commentsHidden ? props.setCommentsHidden(false) : props.setCommentsHidden(true) }}
            ><i class="fas fa-paper-plane"></i></button>
        </div>
    );
}
export default Comments_toggle_button;