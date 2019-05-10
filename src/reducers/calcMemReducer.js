import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR } from '../actions/types';
import {default as entryBufferReducer, initialState as entryBufferInitialState } from './entryBufferReducer';
import {default as stackReducer, initialState as stackInitialState} from './stackReducer';

const initialState = {
    entryBuffer: entryBufferInitialState,
    stack: stackInitialState,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
        case PRESS_ENTER:
        case PRESS_OPERATOR:
        default:
            return { 
                        entryBuffer: entryBufferReducer(state.entryBuffer, action), 
                        stack: stackReducer(state.stack, action),
                    }
    }
}
