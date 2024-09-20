// src/App.jsx
import { useState } from 'react';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';



const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    //get weather data
    const data = await weatherService.show(city)

    //create new weather object
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
  
    //update the weather state
    setWeather(newWeatherState);
    console.log('State', weather);
  }

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={ weather } />
    </main>
  );
};

export default App;