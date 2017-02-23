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
                standing: [],
                leagueCaption: '',
                matchday: 0
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
                <AppHead header={this.state.leagueData.leagueCaption}/>
                <ChooseSeasson/>
                <LeagueTable leagueData={this.state.leagueData}/>
            </div>
        )
    }
}
