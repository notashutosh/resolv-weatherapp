import React from 'react';

const HourlyForecast = ({ hourlyData }) => {
    return (
        <div>
            <h2>Hourly Forecast</h2>
            <ul>
                {hourlyData.map((hour, index) => (
                    <li key={index}>
                        <p>Time: {hour.time}</p>
                        <p>Temperature: {hour.temp_c}°C</p>
                        <p>Precipitation: {hour.precip_mm} mm</p>
                        <p>Wind: {hour.wind_kph} km/h</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HourlyForecast;