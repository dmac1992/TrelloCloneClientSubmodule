import { CURRENT_TASK_POPUP } from './types';


export const setCurrentTaskPopupID = (id) => {
    return {
        type: CURRENT_TASK_POPUP.SET_ID,
        payload: id
    }
}
