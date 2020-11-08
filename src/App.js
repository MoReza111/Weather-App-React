import React from 'react'
import Weathers from './components/weather/Weathers'
import Search from './components/layouts/Search'
import Navbar from './components/layouts/Navbar'

import WeatherState from './context/weather/WeatherState'

import './App.css';

const App = () => {
  return (
    <WeatherState>
      <div className="App" >
        <Navbar />
        <div className="container">
          <Search />
          <Weathers />
        </div>
      </div>
    </WeatherState>
  )
}

export default App;
