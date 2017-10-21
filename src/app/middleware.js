import { LOG_IN, LOG_OUT } from './actions';

export function authenticationMiddleware(){
    return next => action => {
        next(action);
    
    
    if(action.type == LOG_IN || action.type == LOG_OUT) {
        localStorage.setItem('authentication', JSON.stringify(action.payload.authentication))
    }
  };
}