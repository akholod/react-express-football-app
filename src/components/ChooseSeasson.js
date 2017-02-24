import React, { Component } from 'react';

export default class App extends Component {
    buttonClickHandler = (arg) => {
        console.log(arg);
        this.props.changeLeagueHandler(arg);
    }
    render() {
        return(
            <div>
                <button onClick={this.buttonClickHandler.bind(this, 'prev')}> prev </button>
                <span> Choose League </span>
                <button onClick={this.buttonClickHandler.bind(this, 'next')}> next </button>
            </div>
        )
    }
}
