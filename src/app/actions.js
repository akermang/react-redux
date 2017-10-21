import fetch from 'isomorphic-fetch';

//action type
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_IN';

export function getAuth() {
    let authentication = JSON.parse(localStorage.getItem('authentication')) || { apiToken: '', uuId: '' };
    
    return {
        type: LOG_IN,
        payload: {
            authentication
        }
    };
}
    
export function login(uuId, apiToken){
    return {
        type: LOG_IN,
        payload: {
            authentication: {
                uuId,
                apiToken
            }
        }
    };
}

export function logout(){
    return {
        type: LOG_OUT,
        payload: {
            tasks: [],
            authentication: {
                uuId: '',
                apiToken: ''
            }
        }
    };
}

    
export function fetchTasks() {
    
    return function(dispatch, getState) {
        let state = getState();
        //console.log(state.authentication)
        
        
        return fetch('https://habitica.com:443/api/v2/user/tasks', {
        headers: {
            'X-API-User': state.authentication.uuId,
            'X-API-Key': state.authentication.apiToken
        }
        })
        .then(response => response.json())
        .then((json) => {
            //console.log(json)
            dispatch(receiveTasks(json));
        })
        
        if(!state.authentication || state.authentication.uuId.length === 0 || state.authentication.apiToken.length === 0) {
            return function(){ };
        }
        ;
    };
}
    
export function receiveTasks(tasks) {
    return {
        type: RECEIVE_TASKS,
        payload: {
            tasks
        }
    };
}
    
export function getTasks(){
    return{
        type: GET_TASKS,
        payload: {
            tasks
        }
    };
}
    
export function addTask(text, type){
    return {
        type: ADD_TASK,
        payload: {
            text,
            type
        }
    };
}    
    
export function completeTask(id){  
    return {
        type: COMPLETE_TASK,
        payload: {
            id
        }
    };
}    
    
export function removeTask(id){  
    return {
        type: REMOVE_TASK,
        payload: {
            id
        }
    };
}    
    

