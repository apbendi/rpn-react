import { PRESS_NUMBER } from '../actions/types';

const initialState = 0;

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
            return parseInt(state.toString() + action.payload.toString());
        default:
            return state;
    }
}
