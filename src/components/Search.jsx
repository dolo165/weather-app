import React from 'react'
import module from "./Search.module.scss"
import WeatherCard from './WeatherCard'

function Search(props) {
    const API_KEY = 'd49a9acd41b8bcc680b4ac1978cbe25d'
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    let city = ''

    async function loadingData(){
        let responce = await fetch(`${URL}?q=${city}&units=metric&cnt=78&appid=${API_KEY}`)
        let data = await responce.json()
        props.setWeatherState(data)
        if (data.cod == '200'){
            
        }
    }

    function setCity(event){
        city = event.target.value
    }

    return (
        <div className={module.search}>
            <div className={module.search__container}>
                <form>                
                    <input type='text' onChange={setCity} placeholder="Write a city" />
                </form>
                <button onClick={loadingData}>click</button>
            </div>
        </div>
    )
}

export default Search