import React, { Component } from 'react';


export default class Search extends Component {
    
    onInputChange(term) {
        this.setState({ term });
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchTermChange(this.state.term)
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" className="search__input"
                        onChange= {event => this.setState({term: event.target.value})}
                        />

                    <button type="submit" className="button">Search</button>
                </form>
            </div>
        );
    }
}