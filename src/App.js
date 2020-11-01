import React, { useState } from 'react'
import Weathers from './components/weather/Weathers'
import Search from './components/layouts/Search'
import Navbar from './components/layouts/Navbar'
import './App.css';

const App = () => {
  const [forecast, setForecast] = useState(null)

  const getWeather = (city) => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=31aacb8d5aff43d29a9194740203110&q=${city}&days=1
      `).then(res => res.json())
      .then(res => setForecast(res))
  }

  return (
    <div className="App" >
      <Navbar />
      <div className="container">
        <Search getWeather={getWeather} />
        {forecast && <Weathers forecast={forecast} />}
      </div>
    </div>
  )
}

export default App;
