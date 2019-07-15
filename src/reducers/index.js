import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import activeModalReducer from './activeModalReducer';
import floatingPopupReducer from './floatingPopupReducer';
import boardReducer from './boardReducer';
import sprintsReducer from './sprintsReducer';
import tasksReducer from './tasksReducer';
import checklistReducer from './checklistReducer'
import checklistItemReducer from './checklistItemReducer';
import commentsReducer from './commentsReducer';
import activityReducer from './activityReducer';
import usersReducer from './usersReducer'
import currentTaskPopupReducer from './currentTaskPopupReducer';
import userIdReducer from './userIdReducer';
import teamReducer from './teamReducer';

//TODO - refactor 'currentTaskPopup' key to 'currentTaskPopupID'
export default combineReducers({
    header: headerReducer,
    activeModal: activeModalReducer,
    floatingPopup: floatingPopupReducer,
    boards: boardReducer,
    sprints: sprintsReducer,
    tasks: tasksReducer,
    checklists: checklistReducer,
    checklistItem: checklistItemReducer,
    comments: commentsReducer,
    activities: activityReducer,
    users: usersReducer,
    currentTaskPopup: currentTaskPopupReducer,
    userId: userIdReducer,
    teams: teamReducer
})

