import { PRESS_NUMBER } from '../actions/types';

const initialState = "";

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
            return state + "hello there";
        default:
            return state;
    }
}
