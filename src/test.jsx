import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const API_KEY = '3cbde29f38cfbf3c6a1bd8fba1f433a8';
// const city = 'khemisset';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=38d913a8f3dc43b08c494039230907&q=Khemisset&days=7&aqi=yes&alerts=yes`);
            setWeatherData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchData();
    }, []);
    
//     const convertToCelsius = (temperature) => {
//     return Math.round((temperature - 32) * 5 / 9);
//   };
    return (
        <div>
        {weatherData ? (
            <div>
            <h2>{weatherData.location.name}-{weatherData.location.country}</h2>
            <p>Temperature: {weatherData.current.temp_c} °C</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            {/* <p>Wind Speed: {weatherData.wind.speed} m/s</p> */}
            </div>
        ) : (
            <p>Loading weather data...</p>
        )}
        </div>
    );
    };

export default WeatherApp;
