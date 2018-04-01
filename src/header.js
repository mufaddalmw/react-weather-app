import React, { Component } from 'react';
export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    <h1>React Weather App</h1>
                </div>
                <div className="header__name">
                    Created by: <a href="https://www.linkedin.com/in/mufaddalmw/" target="_blank">Mufaddal</a>
                </div>
            </div>
        );
    }
}