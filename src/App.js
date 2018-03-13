import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import weather from 'yahoo-weather'; // or require it 
import axios from 'axios'; // or require it 

const apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';
let city = 'toronto';

// Make a request for a user with a given ID



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      weather: null,
      icon: null,
      temp: null,
      wind: null,
      city: null,
      country: null,
      sunrise: null,
      sunset: null
    }
  }
  componentDidMount() {
    let currentComponent = this;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(function (response) {
      
      currentComponent.setState({ 
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
        weather: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        temp: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        country: response.data.sys.country,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset
        
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render() {
    
    return (
      <div className="App">
        
         {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">{this.state.weather.location ? this.state.weather.location.city : null}</h1> */}
          <h1 className="App-title">{this.state.lat}</h1>
        {/* </header> */}
        {/* <p className="App-intro"> */}
          {/* {this.state.data.} */}
        {/* </p> */}
      </div>
    );
  }
}

export default App;