import { combineReducers } from 'redux';
import inputsReducer from './inputsReducer';
import timersReducer from './timersReducer';

export default combineReducers({
  inputsReducer,
  timersReducer,
});
