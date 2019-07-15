import { FLOATINGPOPUP } from '../actions/types';

const initialState = null;

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FLOATINGPOPUP.SET_FLOATING_POPUP:
            return {
                floatingPopup: payload.popup,
                anchorRef: payload.anchorRef,
                argumentsAsProps: payload.argumentsAsProps
            }
        case FLOATINGPOPUP.SET_FLOATING_POPUP_INPLACE:
            return {
                floatingPopup: payload.popup,
                anchorRef: state.anchorRef,
                argumentsAsProps: payload.argumentsAsProps
            }
        default:
            return state;
    }
}