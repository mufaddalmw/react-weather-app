import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import WeatherIcon from './weather-icons.js';
import Search from './search.js';
import Header from './header.js';
import ErrorMsg from './error.js';
import LocationMap from './map.js';
const apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      desc: null,
      icon: null,
      temp: null,
      wind: null,
      city: null,
      country: null,
      sunrise: null,
      sunset: null,
      errorText: null,
      weatherCategory: null
    }
    this.handleSearch('london');
  }
  kelvinToTemp(temp) {
    return (temp - 273.15).toFixed(0)
  }
  convertTimeStamp(timestamp){
    // convert timestamp into milliseconds
    var date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    var time = hours + ':' + minutes.substr(-2);
    return (time);
  }
  handleSearch(term){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apiKey}`)
      .then((response) => {
        console.log(response)
        this.setState({
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
          desc: response.data.weather[0].description,
          icon: <WeatherIcon condition={response.data.weather[0].icon} />,
          temp: this.kelvinToTemp(response.data.main.temp),
          wind: response.data.wind.speed,
          city: response.data.name,
          country: response.data.sys.country,
          sunrise: this.convertTimeStamp(response.data.sys.sunrise),
          sunset: this.convertTimeStamp(response.data.sys.sunset),
          errorText: null,
          weatherCategory: response.data.weather[0].main
        })
        
      })
      .catch( (error) => {
        console.log(error);
        this.setState({
          errorText: 'City not found'
        })

      });
  }

  // temp color
  backgroundColor(){
    if (this.state.temp <= 10 || this.state.weatherCategory === 'Rain' || this.state.weatherCategory === 'rain'){
      document.body.style.backgroundColor = '#2b81b7';
    }
    else if (this.state.temp > 10 && this.state.temp < 15){
      document.body.style.backgroundColor = '#3598db';
    }
    else if (this.state.temp > 15 && this.state.temp < 25){
      document.body.style.backgroundColor = '#f1c40f';
    }
    else if (this.state.temp > 25 && this.state.temp < 35) {
      document.body.style.backgroundColor = '#f39b12';
    }
    else {
      document.body.style.backgroundColor = '#e67f23';
    }
  }
  
  render() {
    this.backgroundColor()

    const handleSearch = (term) => { this.handleSearch(term) };
    return (
      <div className="App weather">
        <Header/>
        <Search onSearchTermChange={handleSearch} />
        <ErrorMsg message={this.state.errorText}/>
          <h1 className="weather__city">{this.state.city}, {this.state.country}</h1>
          <div className="weather__desc">{this.state.desc}</div>
          <div className="weather__icon">{this.state.icon}</div>
          <div className="weather__temp"><span className="weather__temp-num">{this.state.temp}</span> <sup>o</sup>C
            <span className="weather__wind">Wind: {this.state.wind} km/h</span>
          </div>
          
        <div className="weather__sun-time"><small>Sunrise:</small> {this.state.sunrise} | <small>Sunset:</small> {this.state.sunset}</div>
          
          {/* <LocationMap/> */}
      </div>
    );
  }
}