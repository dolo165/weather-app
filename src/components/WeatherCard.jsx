import React from 'react';
import module from './WeatherCard.module.scss';

function WeatherCard(props) {
    console.log(props.weatherState)
    return (
        <div className={module.weatherCard}>
            <div className={module.card}>
                <h1>{props.weatherState? props.weatherState.name : "OSH"}</h1>
                <h1>{props.weatherState? props.weatherState?.sys?.country: ' KG'}</h1>
                <h1 className={module.card2}>{props.weatherState? props.weatherState.main.temp: 5}°C</h1>            
            </div>
        </div>
    );
}

export default WeatherCard;