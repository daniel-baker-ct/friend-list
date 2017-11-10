import * as types from './actionTypes';
import FriendApi from '../api/mockFriendApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadFriendsSuccess(friends) {
    return { type: types.LOAD_FRIENDS_SUCCESS, friends };
}

export function createFriendsuccess(friend) {
    return { type: types.CREATE_FRIEND_SUCCESS, friend };
}

export function updateFriendsuccess(friend) {
    return { type: types.UPDATE_FRIEND_SUCCESS, friend };
}

export function loadFriends() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return FriendApi.getAllFriends().then(friends => {
            dispatch(loadFriendsSuccess(friends));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveFriend(friend) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return FriendApi.saveFriend(friend).then(savedFriend => {
            friend.id ? dispatch(updateFriendsuccess(savedFriend)) :
                dispatch(createFriendsuccess(savedFriend));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}