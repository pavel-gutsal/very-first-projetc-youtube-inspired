import React, {useState , useEffect} from 'react'
import './weather_widget.css'

 const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=103d2bea1f0fea90b85f7ca4c51dcc4f`;//weather api
 
 const API_Geolocation=()=>{
    return `https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1`
  }/////////////////////////////geolocation

const createURL=(town)=>{
  return `${API_URL}&units=metric&q=${town}`
}
const Weather_widget=()=>{
    const[query,setQuery]=useState('');
    const[weather , setWeather]=useState({})
    const[image , setImage] = useState('Weather_widget_warm')
    const[location , setLocation] = useState(null);//geolocation
    const[widgetHidden,setWidgetHidden] = useState(true);
    //states

    useEffect(()=>{/////////////////////geolocation
        
        getUserGeolocationDetails();
      },[location]);///////////////////////geolocation

      const getUserGeolocationDetails =()=>{////////////////geolocation
        console.log('Used effect');
        fetch(API_Geolocation())
        .then((res)=>{return res.json()})
        .then((data)=>{
          setQuery(data.city);
          console.log(data)
          setLocation(data.city);
          console.log(location)
          search();
        })};////////////////////////////////////////geolocation

    const submitHandler=(e)=>{
        e.preventDefault();
        if(query!==''){
            search();
            setQuery('');
        }
    }

    const search=()=>{
        fetch(createURL(query.toLowerCase()))
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data)
                setWeather(data);
            })
    };

    useEffect(()=>{
       if(typeof weather.main!=='undefined') {
           if(weather.main.temp<0){
            setImage('Weather_widget_cold');
           }else if(weather.main.temp>=0 && weather.main.temp<=15 ){
            setImage('Weather_widget_chill');
           }else if(weather.main.temp>=16 && weather.main.temp<=25 ){
            setImage('Weather_widget_warm');
           }else{
            setImage('Weather_widget_hot');
           }
       }else{
        setImage('Weather_widget_warm');
       }
    },[weather])

    return(
        <div className="weather">
            <button className="weather_toggle"
                    onClick={()=>{(widgetHidden)? (setWidgetHidden(false)) :(setWidgetHidden(true))}}
            ><i class="fas fa-cloud-sun"></i></button>
            <div className={`Weather_widget ${image} ${(widgetHidden)? ('Weather_widget_hide') :('')}`}>
                <div className="Weather_widget_shades">
                    <form  className="Weather_widget_form"
                            onSubmit={submitHandler}
                            >
                        <input type="text"
                                placeholder='Search...'
                                className="Weather_widget__search" 
                                onChange={(e)=>{
                                    setQuery(e.target.value);
                                    console.log(query)
                                }}
                                value={query}
                                />
                    </form>
                    {(typeof weather.main!=='undefined') ?(
                        <div className="Weather_widget__info">
                            <div className="Weather_widget__location">
                                <h1 className="Weather_widget__city">{weather.name} , {weather.sys.country}</h1>
                            </div>
                            <div className="Weather_widget__weather">
                                <h1 className="Weather_widget__temp">{Math.floor(weather.main.temp)} °C</h1>
                                <h1 className="Weather_widget__description">{weather.weather[0].main}</h1>
                            </div>
                    </div>
                    ) : ('')}
            </div>
            </div>
        </div>
        
    );
}

export default Weather_widget;