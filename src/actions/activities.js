import { ACTIVITY } from 'actions/types';

export const createActivity = () => { };

export const createActivities = (newActivities) => { 
    return {
        type: ACTIVITY.CREATE_ACTIVITIES,
        payload: newActivities
    }
};

export const deleteTaskActivities = (taskID) => {
    return {
        type: ACTIVITY.DELETE_TASK_ACTIVITIES,
        payload: taskID
    }
}