import { PRESS_NUMBER, PRESS_ENTER } from '../actions/types';

const initialState = 0;

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
            return parseInt(state.toString() + action.payload.toString());
        case PRESS_ENTER:
            return initialState;
        default:
            return state;
    }
}
