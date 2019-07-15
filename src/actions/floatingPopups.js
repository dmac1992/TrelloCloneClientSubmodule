import { FLOATINGPOPUP } from './types';


//TODO IMPORTANT - give action handler the ability to pass in arguments to floating popups
// idea 1 - create a piece of redux state that houses object unpacked as props.
// idea 2 - somehow bind properties to referenced function
export const setFloatingPopup = (popup, anchorRef, argumentsAsProps = null) => {
    return {
            type: FLOATINGPOPUP.SET_FLOATING_POPUP,
            payload: {
                popup,
                anchorRef,
                argumentsAsProps
            }
    }
}

export const setFloatingPopupInplace = (popup, argumentsAsProps = null) => {

    return {
        type: FLOATINGPOPUP.SET_FLOATING_POPUP_INPLACE,
        payload: {
            popup,
            argumentsAsProps
        }
    }
   
}

