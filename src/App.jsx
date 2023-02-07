import  { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherState, setWeatherState] = useState(0)
  return (
    <div className="app">
      <Header/> 
      <Search weatherState ={weatherState} setWeatherState = {setWeatherState}/>
      <WeatherCard weatherState = {weatherState} setWeatherState = {setWeatherState}/> 
    </div>
  )
}

export default App
