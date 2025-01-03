import  { useState, useEffect } from "react";
import getWeatherData, { WeatherData } from "./services/weatherService";
import { getUserLocation } from "./utils/location";
import Greeting from "./components/Greeting";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await getUserLocation();
        const { latitude, longitude } = position.coords;
        const weatherData = await getWeatherData(latitude, longitude);
        setWeather(weatherData);
      } catch (error) {
        setError("Failed to fetch weather data");
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <Greeting />
      {error && <p>{error}</p>}
      {weather ? <WeatherDisplay weather={weather} /> : <p>Loading...</p>}
    </>
  );
}

export default App;
