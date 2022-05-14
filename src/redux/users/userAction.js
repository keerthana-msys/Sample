import { GET_USER_LIST_SUCCESS, ADD_NEW_USER, DELETE_USER, GET_USER_LIST_LOADING, GET_USER_LIST_ERROR } from '../../common/constants';
import axios from 'axios';

export const fetchRequest = () => {
    return {
        type: GET_USER_LIST_LOADING
    }
}

export const getUserListSuccess = (userList) => {
    return {
        type: GET_USER_LIST_SUCCESS,
        payload: userList
    }
}

export const getUserListFailure = (error) => {
    return {
        type: GET_USER_LIST_ERROR,
        payload: error
    }
}

export const addNewUser = (user) => {
    return {
        type: ADD_NEW_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export const fetchUserList = () => {
   return (dispatch, getState) => {
        dispatch(fetchRequest);
        axios.get('https://gorest.co.in/public/v2/users').then(response => {
            const usersList = response.data;
            if(getState().users.callApi) dispatch(getUserListSuccess(usersList));
        }).catch(error => {
            const errorMessage = error.message;
            dispatch(getUserListFailure(errorMessage));
        });
    }
}