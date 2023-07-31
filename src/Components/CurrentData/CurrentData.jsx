import React, { useEffect, useState } from 'react'
import sunset from '../../assets/sunset.png';
import sunrise from '../../assets/sunrise.png';
import Wind from '../../assets/WindIcon.png';
import HumidityIcon from '../../assets/HumidityIcon.png';
import { FaSearch ,FaAngleDoubleRight} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import WeatherIcon from '../weatherIcon/WeatherIcon';
import HumidityStatus from '../highlits/humidity/HumidityStatus';
import WindStatus from '../highlits/wind/WindStatus';
import Footer from '../Footer/Footer';
import './CurrentData.css';


export default function CurrentData(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getDayName(dateString) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    }

    const [toggle, setToggle] = useState(false)
    setTimeout(() => {
        if (toggle === true) {
            setToggle(false)
        }
    }, 20000);
    return (
        <>
        {props.weatherData ? (
            <div className="col currentData"> 
                            <div className="row">
                                <div className="col-2 h3" style={{color: toggle?'#00FFCA':'#ea6fa4'}}>
                                        <FaLocationDot/>
                                </div>
                                <div className="col-8 text-center" style={{color:'#ea6fa4'}}>
                                        <h1 className=''><b>{props.weatherData.location.name}</b></h1>
                                        <p><b>{getDayName(props.weatherData.forecast.forecastday[0].date)} / {currentTime.toLocaleTimeString()}</b></p>
                                </div> 
                                <div className="col-2 text-end ">
                                    {/*<button className={`btn w-100 ${toggle ? 'btn-danger' : 'btn-primary'}`} onClick={() => setToggle(!toggle)}> */}
                                    <button className={`btn w-100`} style={{ backgroundColor: toggle ? '#00FFCA' : '#ea6fa4', color:'black' }} onClick={() => setToggle(!toggle)}>
                                        <FaSearch />
                                    </button> 
                                </div>
                            </div>
                            {toggle?
                            <div>
                                <form onSubmit={props.handleSubmit} >              
                                        <div className="searchBar" >
                                            <select className="form-select custom-select" onChange={props.handleSelect}>
                                                <option>Open this select menu</option>
                                                {props.moroccanCities.map((city, index) => (
                                                <option key={index}  value={city}>
                                                    {city}
                                                </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='text-center'>
                                            <button type='submit'style={{ backgroundColor: '#00FFCA', color:'black' }} className='btn btn-success mt-2'>search</button>
                                        </div>
                                </form>
                            </div>
                            :
                            null
                            }

                            <div className="temperature">
                                <WeatherIcon 
                                    hieght={200} 
                                    alt={"Weather Icon"}  
                                    className={'CurrentDataIcon'} 
                                    src={props.weatherData.current.condition.icon}
                                />
                                <h1 className="text-center mt-2">{props.weatherData.current.temp_c}°</h1>
                                <h5><b>{props.weatherData.current.condition.text}</b></h5>
                            </div> 

                            <div className="mobileDisplay">
                                <div className='row mt-4 d-flex align-items-center'>
                                    <div className="col">
                                        <p><b>Today </b></p>
                                    </div>
                                    <div className="col">
                                        <p className='text-end'><b>{props.weatherData.forecast.forecastday[0].day.maxtemp_c} / <span className="text-secondary">{props.weatherData.forecast.forecastday[0].day.mintemp_c}</span> </b></p>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className="col">
                                        <p><b>{getDayName(props.weatherData.forecast.forecastday[1].date)} </b></p>
                                    </div>
                                    <div className="col">
                                        <p className='text-end'><b>{props.weatherData.forecast.forecastday[1].day.maxtemp_c} / <span className="text-secondary">{props.weatherData.forecast.forecastday[1].day.mintemp_c}</span> </b></p>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className="col">
                                        <p><b>{getDayName(props.weatherData.forecast.forecastday[2].date)} </b></p>
                                    </div>
                                    <div className="col">
                                        <p className='text-end'><b>{props.weatherData.forecast.forecastday[2].day.maxtemp_c} / <span className="text-secondary">{props.weatherData.forecast.forecastday[2].day.mintemp_c}</span> </b></p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className="text-center" style={{color:'#ea6fa4'}}><b>Sunset & Sunrise</b></p>
                                <div className="col-md-10 rounded m-2  d-flex ">
                                    <img className='bg-light p-2 rounded' src={sunset} width={50} alt="" style={{ marginRight: '150px' }} />
                                    <h5 style={{ paddingTop: '5px' }}><b>{props.weatherData.forecast.forecastday[0].astro.sunrise}</b></h5>
                                </div>
                                <div className="col-md-10 rounded m-2  d-flex">
                                        <img className='bg-light p-2 rounded' src={sunrise} width={50} alt="" style={{ marginRight: '150px' }}/>
                                        <h5 style={{ paddingTop: '5px' }}><b>{props.weatherData.forecast.forecastday[0].astro.sunset}</b></h5>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className="text-center " style={{color:'#ea6fa4'}}><b>Humidity</b></p>
                                <div className="row mt-3">
                                    <div className="col text-start">
                                        <img src={HumidityIcon} height={40} alt="" />
                                    </div>
                                    <div className="col text-center pt-2">
                                        <h5><b>{props.weatherData.current.humidity} %</b></h5>
                                    </div>
                                    <div className="col text-end"> 
                                        <HumidityStatus humidity={props.weatherData.current.humidity} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 mb-3 fade-in-animation'>
                                <p className="text-center " style={{color:'#ea6fa4'}}><b>Wind Status</b></p>
                                <div className="row mt-3">
                                    <div className="col text-start">
                                        <img src={Wind} height={40} alt="" />
                                    </div>
                                    <div className="col text-center pt-2">
                                        <h5><b>{props.weatherData.current.wind_kph} Km/h</b></h5>
                                    </div>
                                    <div className="col text-end pt-2">
                                        <WindStatus wind={props.weatherData.current.wind_kph}/>
                                    </div>
                                </div>
                            </div>

                            <div className="currentDataFooter">
                                <Footer appName={props.appName} currentYear={props.currentYear} authorName={props.authorName}/>
                            </div>  
            </div>
        ): null} 
        </>
    )
}
