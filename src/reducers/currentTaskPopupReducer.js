import { CURRENT_TASK_POPUP } from 'actions/types';

export default (state = null, action) => {
    switch( action.type ) {
        case CURRENT_TASK_POPUP.SET_ID:
            return action.payload;
        default:
            return state;
    }
}