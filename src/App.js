import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {

    // Comenzamos la busqueda luego que detectamos que la tecla presionada por el usuario es Enter 
    if ( e.key === 'Enter'){
      // La info obtenida en la api la seteamos como el nuevo clima
      const data = await fetchWeather(query)
    
      setWeather(data)
      setQuery('')
    }
  }

  return (
    <div className='main-container'>
      <h2 className="titulo-bienvenida">Bienvenidos</h2>
      <p className="subtitulo-bienvenida">Ingrese una ciudad para obtener el clima actual</p>

    <input
    type='text'
    className='search'
    placeholder='Buscar...'
    value={query}
    onChange={(e)=> setQuery(e.target.value)}
    onKeyPress={search}
    name='serarch'
     />
    
    {weather.main && (
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        
        <div className="city-temp" >
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p>{weather.weather[0].description}</p>
        </div>
      </div>
    )}


    </div>
  );
}

export default App;