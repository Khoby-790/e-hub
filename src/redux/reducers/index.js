import {combineReducers} from 'redux';
import electionsReducer from './elections';

export default combineReducers({
  elections: electionsReducer,
});
