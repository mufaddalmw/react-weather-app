import React, {Component} from 'react';
import SunSVG from './sun.js';
import CloudySVG from './cloudy.js';
import RainSVG from './rain.js';
import StormSVG from './storm.js';
import SnowSVG from './snow.js';
import MistSVG from './mist.js';


var WeatherIcon = ({condition}) => {
    switch (condition) {

        case '01d':
        case '01n':
            return (<SunSVG className='weather__icon' />);

        case '02d':
        case '03d':
        case '04d':
        case '02n':
        case '03n':
        case '04n':
            return (<CloudySVG className='weather__icon' />);

        case '09d':
        case '10d':
        case '09n':
        case '10n':
            return (<RainSVG className='weather__icon' />);

        case '11d':
        case '13d':
        case '11n':
        case '13n':
            return (<SnowSVG className='weather__icon' />);

        case '50d':
        case '50n':
            return (<MistSVG className='weather__icon' />);

        default:
            return <SunSVG className='weather__icon' />
    }
}

export default WeatherIcon;