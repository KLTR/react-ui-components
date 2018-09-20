import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import Login from './components/login-widget/Login'
import Weather from './components/weather-widget/Weather'
import './App.css';

class App extends Component {
    state = {
      city: "New York, New York",
      temp: "30"
    }
    // IF state changes, the component is reendering
  render() {
    return (
      <div className="App">
             <Login></Login>
            <Weather city={this.state.city} temp={this.state.temp}></Weather>
      </div>
    );
  }
}

export default App;
