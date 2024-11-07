import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  let [City ,setCity] = useState('');
  let [Error , setError] = useState(false)  

  let API_URL ='https://api.openweathermap.org/data/2.5/weather'
  const API_KEY ='a922ae9d19e7a41d31bc74cd060e5ef0'

  let getWeather = async ()=>{
   try{
    let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
    let jsonResponse =  await response.json()
     console.log(jsonResponse)

    let result = {
      city : jsonResponse.name,
      temp : jsonResponse.main.temp,
      temp_min : jsonResponse.main.temp_min,
      temp_max : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      feels_like : jsonResponse.main.feels_like,
      weather : jsonResponse.weather[0].description

    }
    console.log(result)
    return result;
   }catch(err){
    throw err;
   }
  }


 

  let handleChange =(event)=>{
    setCity(event.target.value)
  }

  let handleSubmit = async (event) =>{
   try {
    event.preventDefault();
    console.log(City);
   

    setCity("");
   let newInfo = await  getWeather();
   updateInfo(newInfo);
   }catch (err){
    setError(true);
   }
    
  };

  return (

  <div className='searchBox'>
    <h1>Weather - APP</h1>
    <form onSubmit={handleSubmit}>
    <TextField id="City" label="City name" variant="outlined" required value={City}
    
    onChange={handleChange}
    />
    <br></br>
    <br></br>
    <Button variant="contained" type="submit" >
      Search
      </Button>

      {Error && <h2>No such place in our data!!</h2> }
    </form>
  </div>

  );
}