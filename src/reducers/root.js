import { combineReducers } from 'redux';
import calcMemReducer from './calcMemReducer';
import interfaceReducer from './interfaceReducer';

export default combineReducers({
    calcMem: calcMemReducer,
    interface: interfaceReducer,
});