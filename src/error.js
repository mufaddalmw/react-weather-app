import React, { Component } from 'react';


export default class ErrorMsg extends Component {
    constructor(props) {
        super(props);
        // this.state = { type: 'desktop' };
    }
    render() {
        return(
            <div className="error-msg">
                {this.props.message}
            </div>
        )
    }
}
