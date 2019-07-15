import { MODALS } from './types';

export const setActiveModal = (modal) => {
    return {
        type: MODALS.SET_ACTIVE_MODAL,
        payload: modal
    }
}