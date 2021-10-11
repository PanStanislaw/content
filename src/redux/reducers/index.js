import { combineReducers } from 'redux';
import addElement from './addElement';

const rootReducer = combineReducers({
  add: addElement,
});

export default rootReducer;
