import React, { Component } from 'react';
import { getTable } from '../api';
import { competitionsIDs } from '../data';
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
            },
            competitionsIDs,
            currentCompetitionId: 0
        }
    }

    componentWillMount = () => {
        getTable(this.state.competitionsIDs[this.state.currentCompetitionId]).then((res) => {
            this.setState({leagueData: res.body})
        })
    }

    changeLeague(action) {
        let currId = this.state.currentCompetitionId;
        let IDs =this.state.competitionsIDs;
        if(action === 'next') {
            currId = (currId === IDs.length - 1) ? 0 : (currId + 1);
            this.setState({currentCompetitionId: currId});
        }
        if(action === 'prev') {
            currId = (currId === 0) ? (IDs.length - 1) : (currId - 1);
            this.setState({currentCompetitionId: currId});
        }
        getTable(IDs[currId]).then((res) => {
            this.setState({leagueData: res.body})
        })

    }

    render() {
        return(
            <div>
                <AppHead header={this.state.leagueData.leagueCaption}/>
                <ChooseSeasson changeLeagueHandler={this.changeLeague.bind(this)}/>
                <LeagueTable leagueData={this.state.leagueData}/>
            </div>
        )
    }
}
