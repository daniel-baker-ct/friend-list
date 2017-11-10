import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function friendReducer(state = initialState.friends, action) {
    switch (action.type) {
        case types.LOAD_FRIENDS_SUCCESS:
            return action.friends;
        default:
            return state;
    }
}