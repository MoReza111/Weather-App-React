import React, { Component } from 'react'
import Weathers from './components/weather/Weathers'
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App" >
        <Weathers />
      </div>
    );
  }
}

export default App;
