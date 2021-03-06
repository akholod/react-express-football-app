import React, { Component } from 'react';
import AppHead from './AppHead';
import ChooseSeasson from './ChooseSeasson';
import LeagueTable from './LeagueTable';
import { getTable } from '../../api';
import { competitionsIDs } from '../../data';

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
    componentWillMount() {
        let currentId = ~~sessionStorage.getItem('currentId');
        getTable(this.state.competitionsIDs[currentId]).then((res) => {
            this.setState({leagueData: res.body})
        })
    }

    changeLeague(action) {
        let currId = ~~sessionStorage.getItem('currentId');
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
        sessionStorage.setItem('currentId', parseInt(currId));

    }
    render() {
        return(
            <div className='home-component'>
                <AppHead header={this.state.leagueData.leagueCaption}/>
                <ChooseSeasson changeLeagueHandler={this.changeLeague.bind(this)}/>
                <LeagueTable leagueData={this.state.leagueData} competitionID={this.state.competitionsIDs[~~sessionStorage.getItem('currentId')]}/>
            </div>
        )
    }
}
