import { HEADER } from 'actions/types';

const headerDefaultState = {
    activeLeftPopUp: null,
    activeRightPopUp: null,
    headerSearchInput: ""
}

export default function(state = headerDefaultState, action) {
    switch (action.type) {
        case HEADER.TOGGLE_LEFT_POPUP:
            if (state.activeLeftPopUp === action.payload) {
                return { ...state, activeLeftPopUp:null}  
            };
            return { ...state, activeLeftPopUp: action.payload} 
        case HEADER.TOGGLE_RIGHT_POPUP:
            if (state.activeRightPopUp === action.payload) { 
                return { ...state, activeRightPopUp: null };
            };
            return { ...state, activeRightPopUp:action.payload } ;
        case HEADER.SEARCH_CHANGE:
            return { ...state, headerSearchInput: action.payload}
        default:
            return state;
    }
}