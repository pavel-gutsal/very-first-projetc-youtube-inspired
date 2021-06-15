import React , {useState , useEffect} from 'react';

const API_URL = `https://boring-fe.herokuapp.com/comments`;

const Form=(props)=>{
    const[author , setAuthor] = useState('')
    const[text , setText] = useState('')
    const[height,setHeight]=useState(30)
    const[img,setImage]=useState('https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(author , text);
        const requestData = new FormData(e.target);
        fetch( API_URL ,{
            method:"POST",
            body:requestData})
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data)})
            setText('');
            setAuthor('');
            setHeight('30');
            setImage('https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png');
            props.setonSubmitSucces(props.onSubmitSucces+1);
            
    }

    const imgHandler=(e)=>{
        console.log(e.target.value)
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            setImage(fileReader.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);
        console.log('formHide',props.formHide)
    }

    return(
        <form className={`comments_form ${(props.formHide) ? ('comment_form_hide') : ('')}`} 
              onSubmit={handleSubmit}
              >
            <div className="comments_form_img">
                <input name='image' 
                        id='image'
                        type="file"
                        className="comments_form_img_upload"
                        onChange={imgHandler}
                        />
                <label class="comments_form_img-label" for="image"><i class="fas fa-upload"></i></label>
                <img src={img} alt="" className="comments_form_img_preview" />
            </div>
            <div className="comments_form_text">
               <input type="text" 
                        className="comments_form_text_author" 
                        placeholder='Author' 
                        required
                        onChange={(e)=>{setAuthor(e.target.value)}}
                        value={author}
                        name='author'
                        />
               <textarea  cols="30" rows="1" 
                            className="comments_form_text_post"
                            placeholder='Your thoughts' 
                            required
                            onChange={(e)=>{setText(e.target.value)}}
                            value={text}
                            name='text'
                            onKeyDown={(e)=>{setHeight(e.target.scrollHeight) }}
                            style={{height:`${height}px`}}
                            ></textarea>
            </div>
            <button className="comments_form_submit"><i class="fas fa-plus"></i></button>
        </form>
    );
}
export default Form;