import React, { Component } from 'react';
import { getTable } from '../api';
import AppHead from './AppHead';
import ChooseSeasson from './ChooseSeasson';
import LeagueTable from './LeagueTable';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueData: {
                standing: []
            }
        }
    }

    componentWillMount = () => {
        getTable().then((res) => {
            this.setState({leagueData: res.body})
        })
    }
    render() {
        return(
            <div>
                <AppHead />
                <ChooseSeasson />
                <LeagueTable leagueData={this.state.leagueData}/>
            </div>
        )
    }
}
