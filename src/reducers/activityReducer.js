import { ACTIVITY } from 'actions/types';
import ACTIVITY_TYPES from 'utilityFiles/ActivityTypes';
import { DateTime } from 'luxon';

let testData = [
    {
        id: 0,
        taskID: 0,
        userID: 0,
        type: ACTIVITY_TYPES.MARKED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 1,
        taskID: 0,
        userID: 1,
        type: ACTIVITY_TYPES.REMOVED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 2,
        taskID: 0,
        userID: 2,
        type: ACTIVITY_TYPES.REMOVED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 3,
        taskID: 0,
        userID: 2,
        type: ACTIVITY_TYPES.COMPLETED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 4,
        taskID: 0,
        userID: 1,
        type: ACTIVITY_TYPES.COMPLETED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 5,
        taskID: 0,
        userID: 0,
        type: ACTIVITY_TYPES.UNMARKED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    },
    {
        id: 6,
        taskID: 0,
        userID: 0,
        type: ACTIVITY_TYPES.ADDED,
        entityName: 'sdf',
        timestamp: DateTime.local()
    }
    
]

//TODO - reducer returnining different array but same object references.
export default (state = testData, action) => {
    switch ( action.type ) {
        case ACTIVITY.RECORD_ACTIVITY:
            return action.payload;
        case ACTIVITY.CREATE_ACTIVITIES:
            return [...state, ...action.payload];
        case ACTIVITY.DELETE_TASK_ACTIVITIES:
            return state.filter(activity => activity.taskID !== action.payload)
        default:
            return state;
    }
    
}
