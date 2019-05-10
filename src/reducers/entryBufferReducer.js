import { PRESS_NUMBER, PRESS_ENTER } from '../actions/types';

export const initialState = "";

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
            return parseInt(state + action.payload.toString()).toString()   ;
        case PRESS_ENTER:
            return initialState;
        default:
            return state;
    }
}
