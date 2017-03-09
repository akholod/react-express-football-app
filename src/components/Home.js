import React, { Component } from 'react';
import AppHead from './AppHead';
import ChooseSeasson from './ChooseSeasson';
import LeagueTable from './LeagueTable';
import { getTable, getTeams } from '../api';
import { competitionsIDs } from '../data';

export default class Home extends Component {
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
    // .then((res) => {
    //     this.setState({leagueData: res.body})
    // })
    componentWillMount = () => {
        Promise.all([
            getTable(this.state.competitionsIDs[this.state.currentCompetitionId]),
            getTeams(this.state.competitionsIDs[this.state.currentCompetitionId])
        ]).then(([table, teams]) => {
            table.body.standing = table.body.standing.map((item) => {
                let teamNames = teams.body.teams.map(item => item.name)
                let id = teamNames.indexOf(item.teamName)
                if (id >= 0) {
                    item.id = id
                }
                return item;
            })
            this.setState({leagueData: table.body})
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
            <div className='home-component'>
                <AppHead header={this.state.leagueData.leagueCaption}/>
                <ChooseSeasson changeLeagueHandler={this.changeLeague.bind(this)}/>
                <LeagueTable leagueData={this.state.leagueData}/>
            </div>
        )
    }
}
