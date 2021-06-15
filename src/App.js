import React, {useState , useEffect} from 'react';
import Todo_app from './Todo_app/Todo_app'
import Weather_widget from './weather_widget/weather_widget'
import Comments from './comments/Comments'
import Comments_toggle_button from './comments/components/Comments_toggle_button'
import './index.css'

const App =()=>{
    const[commentsHidden , setCommentsHidden]=useState(true)

    return(
        <div className='app'>
           <header></header>
            <main>
                <Todo_app/>
                <Weather_widget/>
                <Comments_toggle_button commentsHidden={commentsHidden} setCommentsHidden={setCommentsHidden}/>
            </main>
            <footer>
                <Comments commentsHidden={commentsHidden}/>
            </footer>
            
        </div>
    );
}
export default App;
