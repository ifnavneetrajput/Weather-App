import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({Info}){
  const DEFAULT_URL = "https://unsplash.com/photos/a-grassy-area-with-trees-in-the-background-nFYPUxElTkc";  

  const RAINY_URL = "https://www.istockphoto.com/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-gm1257951336-368822698?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcold-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=cold+weather%3A%3Aaffiliate-collections%3Ab";  

  const SUNNY_URL = "https://www.istockphoto.com/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures-gm824845572-135114327?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcold-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=cold+weather%3A%3Aaffiliate-collections%3Ab";  

  const COLD_URL = "https://images.unsplash.com/photo-1602526217431-1d1e8a6f2b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400";  



      // const getWeatherImage = () => {
      //   if (Info.humidity > 80) {
      //     return RAINY_URL;
      //   } else if (Info.tempMax > 20) {
      //     return SUNNY_URL;
      //   } else if (Info.tempMax <= 20) {
      //     return COLD_URL;
      //   }
      //   return DEFAULT_URL;
      // };
  
  return (
 <center>
   <div className="InfoBox">
   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= ""
        title = "weather condition"
     
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       
          <p>feels-Like =  {Info.feels_like}&deg;C</p>
        <p>Humidity =   {Info.humidity}%</p>
         <p>Max - temp =  {Info.temp_max}&deg;C</p>
         <p>Min - temp =  {Info.temp_min}&deg;C</p>
         <p>weather =  {Info.weather}</p>
       
        </Typography>
      </CardContent>
      
    </Card>

  </div>
 </center>
  );
}