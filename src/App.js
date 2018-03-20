import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; // or require it 
import WeatherIcon from './weather-icons.js';
import Search from './search.js';
const apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';


// Make a request for a user with a given ID

class App extends Component {
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
      sunset: null
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
    let currentComponent = this;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apiKey}`)
      .then((response) => {
        // console.log(response);
        currentComponent.setState({
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
        })

      })
      .catch(function (error) {
        console.log(error);
      });

    // this.setState({
    //   videos: videos,
    //   selectedVideo: videos[0]
    // });
  }
  
  render() {
    
    const handleSearch = (term) => { this.handleSearch(term) };
    return (
      <div className="App">
        <Search onSearchTermChange={handleSearch} />

          <h1 className="weather__city">{this.state.city} {this.state.country}</h1>
          <div>{this.state.desc}</div>
          <div>{this.state.icon}</div>
          <div>{this.state.temp} <sup>o</sup>C</div>
          <div>Wind: {this.state.wind} km/h</div>
          <div>Sunrise: {this.state.sunrise}</div>
          <div>Sunset: {this.state.sunset}</div>
        
      </div>
    );
  }
}

export default App;