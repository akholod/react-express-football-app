import React, { Component } from 'react';

export default class App extends Component {
    buttonClickHandler = (arg) => {
        this.props.changeLeagueHandler(arg);
    }
    render() {
        return(
            <div className='choose-seasson-component'>
                <button onClick={this.buttonClickHandler.bind(this, 'prev')}> prev </button>
                <span> Choose League </span>
                <button onClick={this.buttonClickHandler.bind(this, 'next')}> next </button>
            </div>
        )
    }
}
