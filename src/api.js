import request from 'superagent'

export function getTable(competitionsId = 426) {
    return request
    .get(`http://api.football-data.org/v1/competitions/${competitionsId}/leagueTable`)
    .set('X-Auth-Token', '535f044b4b96425988cb1e0dcd9403d1')
}

export function getTeams(competitionsId = 426) {
    return request
    .get(`http://api.football-data.org/v1/competitions/${competitionsId}/teams`)
    .set('X-Auth-Token', '535f044b4b96425988cb1e0dcd9403d1')
}
