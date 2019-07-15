import _ from 'lodash';

import { CHECKLIST_ITEM } from 'actions/types';
import { DateTime } from 'luxon'; 
import { CHECKLIST } from '../actions/types';

let testData = [
    {
        id: 0,
        checklistID: 0,
        name: 'checklist item name',
        checked: true,
        created: DateTime.local()
    },
   
    {
        id: 1,
        checklistID: 0,
        name: 'checklist item name',
        checked: false,
        created: DateTime.local()
    },
    {
        id: 2,
        checklistID: 1,
        name: 'checklist item name',
        checked: false,
        created: DateTime.local()
    },
   
    {
        id: 3,
        checklistID: 1,
        name: 'checklist item name',
        checked: false,
        created: DateTime.local()
    },
];

export default(state = testData, action) => {
    switch ( action.type ) {
        // case CHECKLIST_ITEM.CHECK_CHECKLIST_ITEM:
        //     return state.map(checklistItem => {
        //         if (checklistItem.id === action.payload) {
        //             checklistItem.checked = true;
        //         }
        //         return checklistItem;
        //     });
        case CHECKLIST_ITEM.CHECK_CHECKLIST_ITEM:
            return state.map(checklistItem => {
                if (checklistItem.id === action.payload) {
                    return {
                        ...checklistItem,
                        checked: true,
                    }
                }
                return checklistItem;
            })
        case CHECKLIST_ITEM.UNCHECK_CHECKLIST_ITEM:
            return state.map(checklistItem => {
                if (checklistItem.id === action.payload) {
                    return {
                        ...checklistItem,
                        checked: false,
                    }
                }
                return checklistItem;
            });
        case CHECKLIST_ITEM.CREATE_CHECKLIST_ITEM:
            action.payload.id = _.maxBy(state, 'id').id + 1; //TODO - logic put in place for front end demo, until back end is implemented.
            return [...state, action.payload];
        case CHECKLIST_ITEM.DELETE_CHECKLIST_ITEM:
            return state.filter(item => item.id !== action.payload);
        case CHECKLIST_ITEM.DELETE_CHECKLISTS_ITEMS:
            return state.filter(item => item.checklistID !== action.payload)
        case CHECKLIST_ITEM.CREATE_CHECKLIST_ITEMS:
            return [...state, ...action.payload];
        default: 
            return state;
    }
}