import { CHECKLIST } from './types';

export const deleteChecklist = (checklistID) => {
    return {
        type: CHECKLIST.DELETE_CHECKLIST,
        payload: checklistID
    }
}

export const deleteTaskChecklists = (taskID) => {
    return {
        type: CHECKLIST.DELETE_TASK_CHECKLISTS,
        payload: taskID
    }
}

export const createChecklist = () => { }

export const createChecklists = (newChecklists) => { 
    return {
        type: CHECKLIST.CREATE_CHECKLISTS,
        payload: newChecklists
    }
}