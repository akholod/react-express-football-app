import React, { Component } from 'react';

export default class App extends Component {
    buttonClickHandler = (arg) => {
        this.props.changeLeagueHandler(arg);
    }
    render() {
        return(
            <div className='choose-seasson-component'>
                <button className='choose-seasson-button' onClick={this.buttonClickHandler.bind(this, 'prev')}> prev </button>
                <span className='choose-seasson-head'> Choose League </span>
                <button className='choose-seasson-button'onClick={this.buttonClickHandler.bind(this, 'next')}> next </button>
            </div>
        )
    }
}
