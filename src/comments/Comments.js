import React ,{useState , useEffect} from 'react';
import Single_Comment from './components/single_Coment';
import './styles/Comments.css'
import Form from './components/form'
import Comment_Form_toggle from './components/Comment_Form_toggle'

const API_URL = `https://boring-fe.herokuapp.com/comments`;

const Comments =(props)=>{
    const[posts , setPosts]=useState([]);
    const[formHide , setformHide]=useState(true);
    const[onSubmitSucces,setonSubmitSucces] = useState(0)//changing value 

    useEffect(()=>{console.log(formHide)},[formHide])
    const getComents=()=>{
        const page=1;
        const order='desc'
        
        fetch(`${API_URL}?_page=${page}&_sort=createdAt&_order=${order}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data)
            setPosts(data);
            console.log(posts);
        })
    }
    useEffect(()=>{
        getComents();
    },[onSubmitSucces])

    return(
       <div className={`Comments  ${(props.commentsHidden)? ('Comments_Hidden') :('')}`}>
           <Comment_Form_toggle setformHide={setformHide} formHide={formHide} />
           <Form  formHide={formHide} setonSubmitSucces={setonSubmitSucces} onSubmitSucces={onSubmitSucces}/>
           {posts.map(post=>(
               <Single_Comment post={post} key={posts.createdAt}/>
           ))}
           
       </div>
    );
}
export default Comments;
