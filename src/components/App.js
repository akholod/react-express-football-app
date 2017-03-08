import React, { Component } from 'react';
//import Home from './Home';
// import Team from './Team';

export default class App extends Component {


    render() {
        return(
            <div>
                {/* <Home />
                <Team /> */}

{this.props.children}
            </div>
        )
    }
}
