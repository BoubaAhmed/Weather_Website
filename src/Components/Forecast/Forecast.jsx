import React from 'react'
import HumidityIcon from '../../assets/HumidityIcon.png';
import sunset from '../../assets/sunset.png';
import sunrise from '../../assets/sunrise.png';
import UvIndex from '../../assets/UvIndex.png';
import PrecipitationsIcon from '../../assets/PrecipitationsIcon.png';
import AirQualityIcon from '../../assets/AirQualityIcon.png';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import Precipitations from '../highlits/precipetation/Precipitations';
import Air from '../highlits/air/Air';
import Uv from '../highlits/uv/Uv';
import './Forecast.css'
export default function Forecast(props) {

    const Data = props.weatherData
    function getDayName(dateString) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    }
    function getDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day} ${month}`;
    }
    return (
    <>
    {Data ? (
        <>
        <div className="col forecast"> 
            <h2 className='text-center' style={{textDecoration: 'double underline',color:'#ea6fa4'}}><b>Upcoming Forecasts :</b></h2>
            <div className="row mt-4">
                <div className="col forecastCol pt-3 ">
                    <h4 className='' style={{color:'#ea6fa4'}}><b>Today's</b></h4>
                    <p><b>{getDate(Data.location.localtime.split(' ')[0])}</b></p>
                    <div>
                        <WeatherIcon 
                            hieght={100} 
                            alt={"Weather Icon"}  
                            className={'forecastIcon'} 
                            src={Data.forecast.forecastday[0].day.condition.icon}
                        />
                    </div>
                    <p className='mt-4'><b>{Data.forecast.forecastday[0].day.maxtemp_c} / <span className="text-secondary">{Data.forecast.forecastday[0].day.mintemp_c} °C</span> </b></p>
                    <h5><b className="text-secondary">{Data.forecast.forecastday[0].day.condition.text} </b></h5>
                    <div className="p-3 text-center" >
                    <p className="text-start text-secondary"><b>Sunset & Sunrise</b></p>
                        <div className="row text-start">
                        <div className="col-md-10 rounded m-2  d-flex align-items-center">
                            <img className='bg-light p-2 rounded' src={sunset} width={50} alt="" style={{ marginRight: '50px' }} />
                            <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[0].astro.sunrise}</b></h5>
                        </div>
                        <div className="col-md-10 rounded m-2  d-flex align-items-center">
                                <img className='bg-light p-2 rounded' src={sunrise} width={50} alt="" style={{ marginRight: '50px' }}/>
                                <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[0].astro.sunset}</b></h5>
                        </div>
                        </div>
                    </div>
                    <div className="row p-3 pt-2">
                    <p className="text-start text-secondary"><b>Humidity</b></p>
                        <div className="col-md-10 rounded m-2 mt-0 d-flex align-items-center">
                                <img  src={HumidityIcon} width={50} alt="" style={{ marginRight: '100px' }}/>
                                <h5 className='text-end' style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[0].day.avghumidity} %</b></h5>
                        </div>

                    </div>
                </div>
                <div className="col forecastCol pt-3">
                    <h4 style={{color:'#ea6fa4'}}><b>{getDayName(Data.forecast.forecastday[1].date)}</b></h4>
                    <p><b>{getDate(Data.forecast.forecastday[1].date)}</b></p>
                    <div>
                        <WeatherIcon 
                            hieght={100} 
                            alt={"Weather Icon"}  
                            className={'forecastIcon'} 
                            src={Data.forecast.forecastday[1].day.condition.icon}
                        />
                        <p className='mt-4'><b>{Data.forecast.forecastday[1].day.maxtemp_c} / <span className="text-secondary">{Data.forecast.forecastday[1].day.mintemp_c} °C</span> </b></p>
                        <h5><b className="text-secondary">{Data.forecast.forecastday[1].day.condition.text}</b></h5>
                        <div className="p-3 text-center" >
                        <p className="text-start text-secondary"><b>Sunset & Sunrise</b></p>
                            <div className="row text-start">
                            <div className="col-md-10 rounded m-2  d-flex align-items-center">
                                <img className='bg-light p-2 rounded' src={sunset} width={50} alt="" style={{ marginRight: '50px' }} />
                                <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[1].astro.sunrise}</b></h5>
                            </div>
                            <div className="col-md-10 rounded m-2  d-flex align-items-center">
                                    <img className='bg-light p-2 rounded' src={sunrise} width={50} alt="" style={{ marginRight: '50px' }}/>
                                    <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[1].astro.sunset}</b></h5>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row p-3 pt-2">
                    <p className="text-start text-secondary"><b>Humidity</b></p>
                        <div className="col-md-10 rounded m-2 mt-0 d-flex align-items-center">
                                <img  src={HumidityIcon} width={50} alt="" style={{ marginRight: '100px' }}/>
                                <h5 className='text-end' style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[1].day.avghumidity} %</b></h5>
                        </div>

                    </div>
                </div>
                <div className="col forecastCol pt-3">
                    <h4 style={{color:'#ea6fa4'}}><b>{getDayName(Data.forecast.forecastday[2].date)}</b></h4>
                    <p><b>{getDate(Data.forecast.forecastday[2].date)}</b></p>
                    <div>
                        <WeatherIcon 
                            hieght={100} 
                            alt={"Weather Icon"}  
                            className={'forecastIcon'} 
                            src={Data.forecast.forecastday[2].day.condition.icon}
                        />
                    </div>
                    <p className='mt-4'><b>{Data.forecast.forecastday[2].day.maxtemp_c} / <span className="text-secondary">{Data.forecast.forecastday[2].day.mintemp_c} °C</span> </b></p>
                    <h5><b className="text-secondary">{Data.forecast.forecastday[2].day.condition.text}</b></h5>
                    <div className="p-3 text-center" >
                    <p className="text-start text-secondary"><b>Sunset & Sunrise</b></p>
                        <div className="row text-start">
                        <div className="col-md-10 rounded m-2  d-flex align-items-center">
                            <img className='bg-light p-2 rounded' src={sunset} width={50} alt="" style={{ marginRight: '50px' }} />
                            <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[2].astro.sunrise}</b></h5>
                        </div>
                        <div className="col-md-10 rounded m-2  d-flex align-items-center">
                                <img className='bg-light p-2 rounded' src={sunrise} width={50} alt="" style={{ marginRight: '50px' }}/>
                                <h5 style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[2].astro.sunset}</b></h5>
                        </div>
                        </div>
                    </div>
                    <div className="row p-3 pt-2">
                    <p className="text-start text-secondary"><b>Humidity</b></p>
                        <div className="col-md-10 rounded m-2 mt-0 d-flex align-items-center">
                                <img  src={HumidityIcon} width={50} alt="" style={{ marginRight: '100px' }}/>
                                <h5 className='text-end' style={{ paddingTop: '5px' }}><b>{Data.forecast.forecastday[2].day.avghumidity} %</b></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='text-center' style={{textDecoration: 'double underline',color:'#ea6fa4'}}><b>Today's Highlights :</b></h2>
                <div className="row p-2 m3 highlights">
                    <div className="w-100" ></div>
                    <div className="col p-3 highlight text-center" >
                        <p className="text-center text-light"><b>Precipitation</b></p>
                        <img src={PrecipitationsIcon} height={80} alt="" />
                        <div className="row mt-1" style={{color:'#8BF5FA'}}>
                            <div className="col text-start">
                                <h4><b>{Data.current.precip_mm} mm</b></h4>
                            </div>
                            <div className="col-md-7 text-end mt-1">
                                <Precipitations precipitations={Data.current.precip_mm}/>
                            </div>
                        </div>

                    </div>
                    <div className="col p-3 highlight text-center" >
                        <p className="text-center text-light"><b>Air Quality</b></p>
                        <img src={AirQualityIcon} height={80} alt="" />
                        <div className="row mt-1" style={{color:'#8BF5FA'}}>
                            <div className="col text-start">
                                <h4><b>{Data.current.air_quality.co.toFixed(2)}</b></h4>
                            </div>
                            <div className="col-md-7 text-end mt-1">
                                <Air air={Data.current.air_quality.co}/>
                            </div>
                        </div>
                    </div>
                    <div className="col p-3 highlight text-center" >
                        <p className="text-center text-light"><b>UV Index</b></p>
                        <img src={UvIndex} height={80} alt="" />
                        <div className="row mt-1" style={{color:'#8BF5FA'}}>
                            <div className="col text-start">
                                <h4><b>{Data.current.uv}</b></h4>
                            </div>
                            <div className="col-md-7 text-end mt-1">
                                <Uv uv={Data.current.uv }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    ):null}
    </>
  )
}
