import React, { useState } from 'react'
import Weathers from './components/weather/Weathers'
import Search from './components/layouts/Search'
import Navbar from './components/layouts/Navbar'
import './App.css';

const App = () => {
  const [condtion, setCondition] = useState({})
  const [forecast, setForcast] = useState([])

  const getWeather = (city) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=31aacb8d5aff43d29a9194740203110&q=${city}`)
      .then(res => res.json())
      .then(res => setCondition(res))

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=31aacb8d5aff43d29a9194740203110&q=${city}&days=7
      `).then(res => res.json())
      .then(res => setForcast(res))
  }

  return (
    <div className="App" >
      <Navbar />
      <div className="container">
        <Search getWeather={getWeather} />
        <Weathers condtion={condtion} forecast={forecast} />
      </div>
    </div>
  )
}

export default App;
