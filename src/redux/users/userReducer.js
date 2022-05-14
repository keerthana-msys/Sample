import { GET_USER_LIST_SUCCESS, ADD_NEW_USER, DELETE_USER, GET_USER_LIST_ERROR, GET_USER_LIST_LOADING } from '../../common/constants';

const initialState = {
    loading: false,
    users: [],
    error: '',
    callApi: true
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                users: [...action.payload, ...state.users],
                callApi: false
            });
        case GET_USER_LIST_ERROR:
            break;
        case ADD_NEW_USER: 
            return Object.assign({}, state, {
                users: [{...action.payload}, ...state.users]
            });
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state
    }
}