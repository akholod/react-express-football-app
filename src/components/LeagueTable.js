import React, { Component } from 'react';
import '../public/style/main.scss';

class LeagueTable extends Component {

    render() {
        console.log(this.props.leagueData);
        return(
            <table className='league-table'>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>GL</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.leagueData.standing.map((item, i) => {
                  return (
                      <tr key={i}>
                        <td>{item.position}</td>
                        <td><img className='league-table-img-logo' src={item.crestURI}/></td>
                        <td>{item.points}</td>
                        <td>{item.goals}</td>
                        <td>{item.wins}</td>
                        <td>{item.draws}</td>
                        <td>{item.losses}</td>
                      </tr>
                    );
                })}
                </tbody>
              </table>
            )
        }
}
LeagueTable.propTypes = {
    leagueData: React.PropTypes.shape({
        standing: React.PropTypes.array
    })
}

export default LeagueTable;
