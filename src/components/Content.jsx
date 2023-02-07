import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import module from './Content.module.scss'
import Search from './Search';

function Content(props) {
    const [weatherState, setWeatherState] = useState([])
    return (
        <div className={module.main}>
            <h1 className={module.h1}>Weather forecast</h1>
            <Search weatherState={weatherState} setWeatherState={setWeatherState}/>
            <WeatherCard  weatherState={weatherState} setWeatherState={setWeatherState}/>
        </div>
    );
}

export default Content;