import React, { Component } from 'react';
import '../public/style/main.scss';

class LeagueTable extends Component {

    render() {
        console.log(this.props.leagueData);
        return(
            <div className='league-table-component'>
                <table className='league-table'>
                    <thead>
                      <tr>
                        <th>Pos</th>
                        <th>Team name</th>
                        <th></th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.leagueData.standing.map((item, i) => {
                      return (
                          <tr key={i}>
                            <td>{item.position}</td>
                            <td>{item.teamName}</td>
                            <td><img className='league-table-img-logo' src={item.crestURI}/></td>
                            <td>{item.playedGames}</td>
                            <td>{item.wins}</td>
                            <td>{item.draws}</td>
                            <td>{item.losses}</td>
                            <td>{item.goals}</td>
                            <td>{item.goalsAgainst}</td>
                            <td>{item.goalDifference}</td>
                            <td>{item.points}</td>
                          </tr>
                        );
                    })}
                    </tbody>
                  </table>
            </div>
            )
        }
}
LeagueTable.propTypes = {
    leagueData: React.PropTypes.shape({
        standing: React.PropTypes.array
    })
}

export default LeagueTable;
