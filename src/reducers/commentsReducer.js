import { COMMENT } from 'actions/types';
import { DateTime } from 'luxon'; 

let testData = [
    {
        id: '0',
        taskID: '0',
        userID: '0',
        comment: 'Hi, this is my first comment',
        timestamp: DateTime.fromISO('2016-05-25T09:16:34.123'),
        lastEdited: null
    },
    {
        id: '1',
        taskID: '1',
        userID: '1',
        comment: 'Hi, this is my second comment',
        timestamp: DateTime.fromISO('2016-05-20T09:20:34.123'),
        lastEdited: null
    },
    {
        id: '2',
        taskID: '2',
        userID: '2',
        comment: 'Hi, this is my third comment',
        timestamp: DateTime.fromISO('2016-05-20T09:22:30.123'),
        lastEdited: null
    },
    {
        id: '3',
        taskID: '0',
        userID: '0',
        comment: 'Hi, this is my fourth comment',
        timestamp: DateTime.fromISO('2016-05-27T09:03:34.123'),
        lastEdited: null
    },
    {
        id: '4',
        taskID: '0',
        userID: '1',
        comment: 'Hi, this is my fifth comment',
        timestamp: DateTime.fromISO('2016-05-29T09:08:34.123'),
        lastEdited: null
    },
    {
        id: '5',
        taskID: '0',
        userID: '1',
        comment: 'Hi, this is my fifth comment',
        timestamp: DateTime.fromISO('2016-05-31T09:13:30.123'),
        lastEdited: null
    },
    {
        id: '6',
        taskID: '8',
        userID: '1',
        comment: 'Hi, this is my fifth comment',
        timestamp: DateTime.fromISO('2016-05-19T09:03:20.123'),
        lastEdited: null
    },
    
];

export default(state = testData, action) => {
    switch ( action.type ) {
        case COMMENT.CREATE_COMMENT:
            return [...state, action.payload];
        case COMMENT.DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload);
        case COMMENT.DELETE_TASK_COMMENTS:
            return state.filter(comment => comment.taskID !== action.payload);
        case COMMENT.EDIT_COMMENT:
            return action.payload;
        case COMMENT.CREATE_COMMENTS:
            return [...state, ...action.payload];
        default: 
            return state;
    }
}