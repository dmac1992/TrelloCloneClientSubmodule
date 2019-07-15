import { MODALS } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
      case MODALS.SET_ACTIVE_MODAL:
        return action.payload;
      default:
        return state
    }
}
