import { TEAM } from 'actions/types';

export const createTeam = (team) => {
    return {
        type: TEAM.CREATE_TEAM,
        payload: team
    }
}

export const deleteTeam = (teamID) => {
    return {
        type: TEAM.DELETE_TEAM,
        payload: teamID
    }
}