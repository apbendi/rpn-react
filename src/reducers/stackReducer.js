import { PRESS_ENTER } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_ENTER:
            return [action.payload, ...state];
        default:
            return state;
    }
}
