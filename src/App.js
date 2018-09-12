import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import Login from './components/login-widget/Login'
import Weather from './components/weather-widget/Weather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
             <Login></Login>
            <Weather></Weather>
      </div>
    );
  }
}

export default App;
