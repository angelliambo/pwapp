import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather'
import { Container, Row, Col } from 'react-grid'
import { CityName } from './ui-kit/componets/city-name'
import { CityTemp } from './ui-kit/componets/city-temp'
import { AdditionalInfo } from './ui-kit/componets/additional-info'
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
    <Container>
      <Row>
        <Col xs={12}>
            <input
            type='text'
            className='search'
            placeholder='Search...'
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            onKeyPress={search}
            />           
        </Col>
        <Col xs={12}>
          {weather.main && (
            <div className="city">
              <CityName city={weather} />
              <CityTemp temperature={weather} />
              <AdditionalInfo  info={weather}/>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;