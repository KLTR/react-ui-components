import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import Login from './components/login-widget/Login'
import Weather from './components/weather-widget/Weather'
import Channels from './components/channels-modal-widget/Channels'
import './App.css';

class App extends Component {
    state = {

    }
    // IF state changes, the component is reendering
  render() {
    return (
      <div className="App">
             <Login></Login>
            <Weather ></Weather>
            <Channels></Channels>
      </div>
    );
  }
}

export default App;
