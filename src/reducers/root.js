import { combineReducers } from 'redux';
import entryBufferReducer from './entryBufferReducer';
import stackReducer from './stackReducer';

export default combineReducers({
    entryBuffer: entryBufferReducer,
    stack: stackReducer,
});