import React, { useState } from 'react';
import CityInput from './CityInput';
import DateSelector from './DateSelector';

const App = () => {
    const [city, setCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (newCity) => {
      setCity(newCity);
      fetchWeather();
  };
  
  const handleDateSelect = (date) => {
      setSelectedDate(date);
      fetchWeather();
  };

    const fetchWeather = async () => {
      if (city && selectedDate) {
          try {
              const response = await fetch(`http://localhost:8000/api/weather/forecast/?city=${city}&date=${selectedDate}`);
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              console.log(data)
              setWeatherData(data); // Assuming you have a state called weatherData
          } catch (error) {
              console.error("There was an error fetching the weather data", error);
          }
      }
    };

    return (
        <div>
            <CityInput onCityChange={handleCityChange} />
            <DateSelector onDateSelect={handleDateSelect} />
            {/* Display the selected city and date for now */}
            <p>Selected City: {city}</p>
            <p>Selected Date: {selectedDate}</p>

            {weatherData && (
            <div>
                <h3>Weather Forecast for {city} on {selectedDate}</h3>
                {/* Render your weather data here */}
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Precipitation: {weatherData.current.precip_mm}%</p>
                <p>Wind: {weatherData.current.wind_kph} km/h</p>
            </div>
            )}
        </div>
    );
};

export default App;