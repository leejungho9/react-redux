import { GET_USER_FAIL, GET_USER_START, GET_USER_SUCCESS } from "../actions";

const initalState = {
    loading : false,
    data: [],
    error : null,
};

//리듀서
export default function users(state = initalState, action) {

    if(action.type === GET_USER_START) {
        return {
            ...state,
            loading: true,
            error : null
        };
    }
    
    if(action.type === GET_USER_SUCCESS) {
        return {
            ...state,
            loading: false,
            data : action.data,
        };
    }
    
    if(action.type === GET_USER_FAIL) {
        return {
            ...state,
            loading: false,
            error : action.error
        }
    }
    return state;

    
}

