import { combineReducers } from 'redux';
import friends from './friendReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    friends,
    ajaxCallsInProgress
});

export default rootReducer;