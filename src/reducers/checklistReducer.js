import { CHECKLIST} from 'actions/types';
import { DateTime } from 'luxon'; 

let testData = [
    {
        id: 0,
        name: 'checklist name',
        taskID: 0,
        created: DateTime.local()
    },
    {
        id: 1,
        name: 'checklist name',
        taskID: 3,
        created: DateTime.local()
    },
    {
        id: 2,
        name: 'checklist name',
        taskID: 4,
        created: DateTime.local()
    },
    {
        id: 3,
        name: 'checklist name',
        taskID: 7,
        created: DateTime.local()
    },
];


export default(state = testData, action) => {
    switch ( action.type ) {
        case CHECKLIST.CREATE_CHECKLIST:
            return action.payload;
        case CHECKLIST.DELETE_CHECKLIST:
            return state.filter(({id}) => id !== action.payload);
        case CHECKLIST.DELETE_TASK_CHECKLISTS:
            return state.filter(checklist => checklist.taskID !== action.payload);
        case CHECKLIST.CREATE_CHECKLISTS:
            return [...state, ...action.payload];
        default: 
            return state;
    }
}