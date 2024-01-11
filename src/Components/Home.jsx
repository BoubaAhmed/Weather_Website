import React ,{ useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import { moroccanCities } from '../Data';
import CurrentData from './CurrentData/CurrentData';
import Forecast from './Forecast/Forecast';
import Footer from './Footer/Footer';
const currentYear = new Date().getFullYear();
const authorName = "Bouba Ahmed";
const appName = "WeatherApp";


export default function Home() {

    const API_KEY = '98e5083ad09f40c3b94174731233107';
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('khemisset');
    const [newCity, setNewCity] = useState('khemisset');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`);
                setWeatherData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();

    }, [city]);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setCity(newCity)
        setNewCity('')
    } 
    const handleSelect=(e)=>{
        setNewCity(e.target.value)
    }
    return (
        <div className='app'>
            
                
                {weatherData ? (
                    <><div className="container">
                        <CurrentData 
                            handleSubmit={handleSubmit} 
                            handleSelect={handleSelect} 
                            moroccanCities={moroccanCities}
                            weatherData={weatherData}
                            currentYear={currentYear}
                            authorName={authorName}
                            appName={appName}
                        />
                        
                        <Forecast
                            weatherData={weatherData}
                            currentYear={currentYear}
                            authorName={authorName}
                            appName={appName}
                        />
                        </div>
                        <div className='homeFooter'>
                            <Footer appName={appName} currentYear={currentYear} authorName={authorName}/>
                        </div>
                    </>
                ) : (
                    <div className="loadingData">
                        <p >Loading weather data...</p>
                    </div>
                    
                )}
                
                
        </div>
    )
}
