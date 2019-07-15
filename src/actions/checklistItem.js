import { CHECKLIST_ITEM } from './types';

export const addChecklistItem = (checklistID, name) => {
    return {
        type: CHECKLIST_ITEM.CREATE_CHECKLIST_ITEM,
        payload: {
            checklistID, 
            name,
            checked: false,
            created: new Date()
        }
    }
}


export const deleteChecklistItem = (checklistID) => {
    return {
        type: CHECKLIST_ITEM.DELETE_CHECKLIST_ITEM,
        payload: checklistID
    }
}

export const deleteChecklistsItems = (checklistID) => {
    return {
        type: CHECKLIST_ITEM.DELETE_CHECKLISTS_ITEMS,
        payload: checklistID
    }
}


export const createChecklistItems = (newChecklistItems) => {
    return {
        type: CHECKLIST_ITEM.CREATE_CHECKLIST_ITEMS,
        payload: newChecklistItems
    }
}


export const checkChecklistItem = (checklistItemID) => {
    return {
        type: CHECKLIST_ITEM.CHECK_CHECKLIST_ITEM,
        payload: checklistItemID
    }
}


export const uncheckChecklistItem = (checklistItemID) => {
    return {
        type: CHECKLIST_ITEM.UNCHECK_CHECKLIST_ITEM,
        payload: checklistItemID
    }
}

