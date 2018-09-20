import React, { Component }  from 'react';
import './Weather.css'
import * as sun from '../../assets/sun.png'
import * as cf from '../../assets/cf.png'

const API_KEY = '068c18a520d93c40e7ff103df82604b2'
class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
        city: '',
        temp: '',
        lat: '',
        lon: '',
        weather: '',
        tempScale : 'c'
      }
      this.getWeather = this.getWeather.bind(this);
      this.getLocation = this.getLocation.bind(this);
      this.convertTemp = this.convertTemp.bind(this);
      this.getWeather();
  
  }
  convertTemp(scale) {
    if(scale === 'c') {
      if(this.state.tempScale === 'c'){
        return
      }
      this.setState({tempScale: 'c'})
      this.state.temp = (this.state.temp - 32) / 1.8
      return;
    } else {
        this.setState({tempScale: 'f'})
        this.state.temp = (this.state.temp * 1.8) + 32
        return
    }
  }
  getWeather() {
    navigator.geolocation.getCurrentPosition(this.getLocation);
  }
  getLocation(location) {
    console.log(location);
    this.setState({lat: location.coords.latitude, lon: location.coords.longitude});
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}123&lon=${this.state.lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then((data) => { 
      console.log(data);
      this.setState({city: data.name, temp: data.main.temp, weather: data.weather[0].main})
    })
    .catch((error) => console.log(error));
  }
  render() {

const date = new Date().toDateString()

    return (
      <div className="Weather">
        <div className="weatherBar">
        <div className="row">
            <div className="col-8">
                <p>
                    <span className="day">TODAY</span>
                    <br></br>
                    <span className="date">{date}</span>
                </p>
                <img src={sun}></img>
                <h6>{this.state.city}</h6>
            </div>
            <div className="col-4 text-lg-left">
            <span className="weather">{this.state.weather}</span>
            <h3>{Math.floor(this.state.temp)}°</h3>
             <div className="tempBtns">
              <div onClick={ () => {this.convertTemp('c')} } className={"tempBtn "+ (this.state.tempScale === 'c' ? 'selected': '')} >
              <span>°C</span>
              </div>
              <div onClick={ () => {this.convertTemp('f')} } className={"tempBtn "+ (this.state.tempScale === 'f' ? 'selected': '')} >
              <span>°F</span>
            </div>
            </div>
            </div>
        </div>
        </div>
      </div >
    );
  }
}
export default Weather;
