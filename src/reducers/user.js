import {USER_REQUEST, USER_LOADED, USER_FAIL, ADD_USER} from '../actions/types'

const InitialState = {
    loading: true,
    user: [],
    error: ''
}

export default function(state = InitialState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOADED:
            return {
                ...state,
                loading: false,
                user:payload,
                error: ''
            }
        case USER_FAIL:
            return{
                ...state,
                loading: false,
                user: [],
                error: payload
            }
        case ADD_USER:
            return{
                ...state,
                loading: false,
                user: [],
                error: ''
            }
        default:
            return state;
    }

}