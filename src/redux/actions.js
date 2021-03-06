export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
//액션 생성자 생성

export function addTodo(text) {
    return {
        type : ADD_TODO,
        text,
    };
}

// {type: COMPLETE_TODO, index :3}
export function completeTodo(index) {
    return {
        type : COMPLETE_TODO,
        index 
    }
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll() {
    return {type: SHOW_ALL};
}

export function showComplete() {
    return {type : SHOW_COMPLETE};
}

//users

//깃헙 api 호출을 시작하는 것을 의미함
export const GET_USER_START = 'GET_USER_START'; 

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'; 

// 깃헙 API 호출에 대한 응답이 실패로 돌아온 경우
export const GET_USER_FAIL = 'GET_USER_FAIL';


//액션생성자
export function getUsersStart() {
    return {
        type : GET_USER_START
    }
}

export function getUsersSuccess(data) {
    return {
        type : GET_USER_SUCCESS,
        data
    }
}
export function getUsersFail(error) {
    return {
        type : GET_USER_FAIL,
        error
    }
}

