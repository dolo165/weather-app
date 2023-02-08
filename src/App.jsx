import  { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bishkek from './pages/Bishkek';
import Moscow from './pages/Moscow';

function App() {
  const [weatherState, setWeatherState] = useState(0)
  return (
    
      <div className="app">
        {/* <Header/>  */}
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header/>}>
                  <Route path="bishkek" element={<Bishkek />} />
                  <Route path="moscow" element={<Moscow/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        <Search weatherState ={weatherState} setWeatherState = {setWeatherState}/>
        <WeatherCard weatherState = {weatherState} setWeatherState = {setWeatherState}/> 
      </div>
    
  )
}

export default App
