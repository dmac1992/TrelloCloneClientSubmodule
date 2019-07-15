import { HEADER } from './types';

export const setActiveLeftPopUp = (popUp) => {
    return {
        type: HEADER.TOGGLE_LEFT_POPUP,
        payload: popUp
    }
}
export const setActiveRightPopUp = (popUp) => {
    return {
        type: HEADER.TOGGLE_RIGHT_POPUP,
        payload: popUp
    }
}

export const changeHeaderSearchInput = (input) => {
    return {
        type: HEADER.SEARCH_CHANGE,
        payload: input
    };
}

