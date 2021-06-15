import React from 'react';

const Comment_Form_toggle=(props)=>{
    return(
        <div className="Comment_Form_toggle">
            <button className="Comment_Form_toggle_button"
                    onClick={()=>{props.formHide ? props.setformHide(false) : props.setformHide(true) }}
                    ><i class="fas fa-comment-dots"></i></button>
        </div>
    );
}
export default Comment_Form_toggle;