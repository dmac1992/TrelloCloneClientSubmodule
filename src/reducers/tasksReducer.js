import { TASK } from '../actions/types';
import { DateTime } from 'luxon';

const testState = [
    {
        ID: 0,
        name: 'abvcx',
        description: 'task description',
        created: DateTime.utc(2017, 1, 12)  ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 7,
        archived: false,
        watched: true
    },
    {
        ID: 1,
        name: 'sdfsdf',
        description: 'task description',
        created: DateTime.utc(2017, 2, 12)  ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 6,
        archived: false,
        watched: false
    },
    {
        ID: 2,
        name: 'cvbcvb',
        description: 'task description',
        created: DateTime.utc(2017, 3, 12),
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 5,
        archived: false,
        watched: false
    },
    {
        ID: 3,
        name: 'tryutyu',
        description: 'task description',
        created: DateTime.utc(2017, 4, 12),
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 4,
        archived: false,
        watched: false
    },
    {
        ID: 4,
        name: 'sdfsdf',
        description: 'task description',
        created: DateTime.utc(2017, 5, 12)  ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 3,
        archived: false,
        watched: false
    },
    {
        ID: 5,
        name: 'iopiopio',
        description: 'task description',
        created: DateTime.utc(2017, 6, 12),
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 2,
        archived: false,
        watched: false
    },
    {
        ID: 6,
        name: 'vbnvbn',
        description: 'task description',
        created: DateTime.utc(2017, 7, 12),
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 1,
        archived:  false,
        watched: true
    },
    {
        ID: 7,
        name: 'zxcvzxczx',
        description: 'task description',
        created: DateTime.utc(2017, 8, 12),  
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 0,
        archived: false,
        watched: false
    },
    {
        ID: 8,
        name: 'zxczxc',
        description: 'task description',
        created: DateTime.utc(2017, 8, 12),  
        sprintID: 5,
        boardID: 1,
        userID: 0,
        checklistID: null,
        sprintPosition: 0,
        archived: false,
        watched: false
    },
    
    
]

export default (state = testState, action) => {
    switch (action.type) {
        case TASK.CREATE_TASK:
            return [...state, action.payload]
        case TASK.DELETE_TASK:
            return state.filter(task => task.ID !== action.payload);
        case TASK.CREATE_TASKS:
            return [...state, ...action.payload];
        case TASK.UPDATE_TASKS: 
            let updatedTasks = action.payload;
            let newState = [...state];
            updatedTasks.forEach(updatedTask => {
                newState.forEach((task, index) => {
                    if ( task.ID === updatedTask.ID)
                        Object.assign(newState[index], updatedTask)
                })
            })
            return newState;
        case TASK.UPDATE_DESCRIPTION:
            return state.map(task => {
                if ( task.ID === action.payload.id) {
                    return {
                        ...task,
                        description: action.payload.description
                    }
                }
                return task;
            })
        case TASK.UPDATE_NAME:
            return state.map(task => {
                if (task.ID === action.payload.id) {
                    return {
                        ...task,
                        name: action.payload.name
                    }
                }
                return task;
            })
        case TASK.MOVE_SPRINT_TASKS_TO_NEWSPRINT:
            return state.map(task => {
                if (task.sprintID === action.payload.sprintID) {
                    return {
                        ...task,
                        sprintID: action.payload.newSprintID
                    }
                }
                return task;
            })
        case TASK.ARCHIVE_TASK:
            return state.map(task => {
                if (task.ID === action.payload) {
                    return { ...task, archived: true }
                }
                return task;
            })
        case TASK.UNARCHIVE_TASK:
            return state.map(task => {
                if (task.ID === action.payload) {
                    return { ...task, archived: false }
                }
                return task;
            })
        case TASK.MOVE_TASK:
            return state.map(task => {
                if (task.ID === action.payload.taskID) {
                    return {
                        ...task,
                        sprintID: action.payload.targetSprintID,
                        boardID: action.payload.targetBoardID
                    }
                }
                return task;
            })
        case TASK.TOGGLE_WATCH_TASK:
            return state.map(task => {
                if (task.ID === action.payload) {
                    return {
                        ...task,
                        watched: !task.watched
                    }
                }
                return task;
            })
        default:
            return state
    }
}