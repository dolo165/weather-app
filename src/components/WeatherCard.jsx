import React from 'react';
import module from './WeatherCard.module.scss';

function WeatherCard(props) {
    const currentDate = new Date().toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    });


    const currentDay = new Date().toLocaleString("ru",{
        weekday: 'long'
    })
    console.log(props.weatherState)
    return (
        <div className={module.weatherCard}>
            <div className={module.card}>
                <h1>{props.weatherState? props.weatherState.name : " "}</h1>
                <h1>{props.weatherState? props.weatherState?.sys?.country: ' '}</h1>
                <h1 className={module.card2}>{props.weatherState? props.weatherState.main.temp: " "}°C</h1>
            </div>
        </div>
    );
}

export default WeatherCard;