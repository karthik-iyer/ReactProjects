import counterReducer from './counter';
import {combineReducers} from 'redux';
import isLoggedReducer from './isLogged';

const allReducers = combineReducers({
   counter: counterReducer,
   isLogged: isLoggedReducer
});
export default allReducers;