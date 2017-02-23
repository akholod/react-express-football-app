import request from 'superagent'

export function getTable() {
    return request
    .get('http://api.football-data.org/v1/competitions/426/leagueTable')
    .set('X-Auth-Token', '535f044b4b96425988cb1e0dcd9403d1')
}
