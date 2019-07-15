import {
    HOME
} from 'actions/types';

const homeMenuPopupDefault = {
    activeHomeMenuPopup: null
}

 export default (state = homeMenuPopupDefault, action) => {
    switch(action.type) {
        case HOME.TOGGLE_HOME_MENU_POPUP:
            if(action.payload === state.activeHomeMenuPopup) {
                return null;
            } else {
                return action.payload;
            }
        default:
            return null;
    }
}