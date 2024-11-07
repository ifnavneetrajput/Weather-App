import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp(){

  const [WeatherInfo , setWeatherInfo] = useState(
      {
      city: "Delhi",
      feels_like: 295.37 ,
      humidity: 73,
      temp: 295.2,
      temp_max: 295.2,
      temp_min: 295.2,
      weather: "haze",
    }
  )

  let updateInfo = (result)=>{
    setWeatherInfo(result);
  }
  return (
  <>
  <SearchBox updateInfo = {updateInfo}></SearchBox>
  <br></br>
  <br></br>
  <InfoBox Info = {WeatherInfo}></InfoBox>


  </>
  );
}