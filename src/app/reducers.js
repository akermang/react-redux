import { GET_TASKS, ADD_TASK, COMPLETE_TASK, REMOVE_TASK, LOG_IN, LOG_OUT, RECEIVE_TASKS } from './actions';

export default rootReducer;

const initialState = {
    tasks: []
};

function rootReducer(state = initialState, action){

    switch(action.type){
        case RECEIVE_TASKS:
            return Object.assign({}, state, { tasks: action.payload.tasks });
        case GET_TASKS:
            return Object.assign({}, state, { tasks: action.payload.tasks });
        case ADD_TASK:
            return addTaskReducer(state, action);
        case COMPLETE_TASK:
            return completeTaskReducer(state, action);
        case REMOVE_TASK:
            return removeTaskReducer(state, action);
        case LOG_IN:
            return Object.assign({}, state, { authentication: action.payload.authentication });
        case LOG_OUT:
            return Object.assign({}, state, { tasks: action.payload.tasks, authentication: action.payload.authentication })
            
        default:
            return state;
    }
    //console.log(state)
    return state;
}

function addTaskReducer(state, action){
     
    var task = action.payload;
    task.completed = false;
    
    var lastTask = state.tasks[state.tasks.length - 1];
    if(lastTask != undefined){
        task.id = lastTask.id + 1;
    }else{
        task.id = 1;
    }
        return Object.assign({}, state, { tasks: [ ...state.tasks, task ] })
}

function completeTaskReducer(state, action){
    var id = action.payload.id;
    return Object.assign({}, state, { tasks: state.tasks.map(task => {
      if(id === task.id) {
         
        return Object.assign({}, task, { completed: true });
      }
        
      return task;
    })
  }); 
}

function removeTaskReducer(state, action){
    var id = action.payload.id;
    
    
    
    var newTasks =  Object.assign({}, state, { tasks: state.tasks.filter(task => {
          if(id !== task.id) {

            return task;
          }
       })
    }); 
    
    console.log(newTasks)
    return newTasks
}





