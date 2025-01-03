import { WeatherData } from "../services/weatherService";

interface WeatherDisplayProps {
  weather: WeatherData;
}

const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  return (
    <div>
      <h2>
        Weather in {weather.location.name}, {weather.location.region},{" "}
        {weather.location.country}
      </h2>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <img
        src={`https:${weather.current.condition.icon}`}
        alt={weather.current.condition.text}
      />
    </div>
  );
};

export default WeatherDisplay;
