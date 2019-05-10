import { combineReducers } from 'redux';
import calcMemReducer from './calcMemReducer'

export default combineReducers({
    calcMem: calcMemReducer,
});