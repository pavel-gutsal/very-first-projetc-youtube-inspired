import React ,{useState , useEffect} from 'react';




const Single_Comment=(props)=>{
    const img=`https://boring-fe.herokuapp.com/${props.post.avatarUrl}`

    const dateHanler=()=>{
        const createdAt=new Date(props.post.createdAt);
        const time = createdAt.toLocaleString('en-US');
        return time;
        
    }
    

    return(
        <div className="Single_Comment">
            <div className="Single_Comment_hat">
                <img src={img} alt="" className="Comments_post_img" />
                <h2 className="Comments_post_author">{props.post.author}</h2>
                <h2 className="Comments_post_timePosted">{dateHanler()}</h2>
            </div>
            <p className="Comments_post_body">{props.post.text}</p>
        </div>
    );
}

export default Single_Comment;