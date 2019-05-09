import { combineReducers } from 'redux';
import entryBufferReducer from './entryBufferReducer';

export default combineReducers({
    entryBuffer: entryBufferReducer,
});