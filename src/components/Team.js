import React, { Component } from 'react';
import { Link } from 'react-router';
import { getTable } from '../api';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                away: {},
                home: {}
            }
    }
}
    componentWillMount = () => {
        getTable(this.props.params.compId).then((res) => {
            let [ team ] = res.body.standing.filter(item => (item.teamName === this.props.params.teamName))
            this.setState({data: team})
        })
    }
    render() {
        console.log(this.state.data);
        return(
            <div className='team-details-component'>
                <div className=''>
                    <img src={this.state.data.crestURI} className='team-logo'/>
                    <div className='team-statistic-block'>
                        <h1>{this.state.data.teamName}</h1>
                        <h3>Points: <span className='total'>{this.state.data.points}</span></h3>
                        <ul>
                            <li>Wins: <span className='total'>{this.state.data.wins}</span></li>
                            <li>Losses: <span className='total'>{this.state.data.losses}</span></li>
                            <li>Draws: <span className='total'>{this.state.data.draws}</span></li>
                            <li>Goals: <span className='total'>{this.state.data.goals}</span></li>
                            <li>Goals Against: <span className='total'>{this.state.data.goalsAgainst}</span></li>
                            <li>Goal Difference: <span className='total'>{this.state.data.goalDifference}</span></li>
                            <li>Played: <span className='total'>{this.state.data.playedGames}</span></li>
                        </ul>
                    </div>

                    <div className='team-statistic-block'>
                        <div className='team-statistic-block'>
                        <h3>Home</h3>
                            <ul>
                                <li>Wins: <span className='home'>{this.state.data.home.wins}</span></li>
                                <li>Losses: <span className='home'>{this.state.data.home.losses}</span></li>
                                <li>Draws: <span className='home'>{this.state.data.home.draws}</span></li>
                                <li>Goals: <span className='home'>{this.state.data.home.goals}</span></li>
                                <li>Goals <span className='home'>Against: {this.state.data.home.goalsAgainst}</span></li>
                            </ul>
                        </div>
                        <div className='team-statistic-block'>
                        <h3>Away</h3>
                            <ul>
                                <li>Wins: <span className='away'> {this.state.data.away.wins}</span></li>
                                <li>Losses: <span className='away'> {this.state.data.away.losses}</span></li>
                                <li>Draws: <span className='away'> {this.state.data.away.draws}</span></li>
                                <li>Goals: <span className='away'> {this.state.data.away.goals}</span></li>
                                <li>Goals Against: <span className='away'> {this.state.data.away.goalsAgainst}</span></li>
                            </ul>
                        </div>
                    </div>
                    <Link to='/'>Back to table</Link>
                </div>
            </div>
        )
    }
}
