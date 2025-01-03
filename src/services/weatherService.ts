export interface WeatherData {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: { text: string; icon: string };
    };
  }
  
  const getWeatherData = async (latitude: number, longitude: number): Promise<WeatherData | null> => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;
  
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: WeatherData = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };
  
  export default getWeatherData;
  