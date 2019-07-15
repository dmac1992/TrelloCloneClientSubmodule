import { TEAM } from 'actions/types';

const testState = [
    {
        id: 0,
        name: 'team A',
        description: '',
        users: [ 0, 1, 2 ]
    },
    {
        id: 1,
        name: 'team B',
        description: '',
        users: [ 0, 1 ]
    },
    {
        id: 2,
        name: 'team C',
        description: '',
        users: [0]
    }
]

export default(state = testState, action) => {

    switch(action.type) {
        case TEAM.CREATE_TEAM:
            return [...state, action.payload]
        case TEAM.DELETE_TEAM:
            return state.filter(team => team.id !== action.payload)
        case TEAM.ADD_MEMBER:
            return state;
        case TEAM.REMOVE_MEMBER:
            return state;
        default:
            return state;
    }
    
}