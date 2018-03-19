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
            return (<SunSVG className='weather__icon' />);

        case '02d':
            return (<CloudySVG className='weather__icon' />);

        case '03d':
            return (<CloudySVG className='weather__icon' />);

        case '04d':
            return (<CloudySVG className='weather__icon' />);

        case '09d':
            return (<RainSVG className='weather__icon' />);

        case '10d':
            return (<RainSVG className='weather__icon' />);

        case '11d':
            return (<StormSVG className='weather__icon' />);

        case '13d':
            return (<SnowSVG className='weather__icon' />);

        case '50d':
            return (<MistSVG className='weather__icon' />);

        default:
            return <SunSVG />
    }
}

export default WeatherIcon;