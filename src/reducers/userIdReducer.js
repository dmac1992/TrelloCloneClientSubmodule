import { SET_USER_ID } from 'actions/types';

export default ( state = 2 , action ) => {
    switch(action.type) {
        case SET_USER_ID:
            return action.payload
        default:
            return state;
    }
}