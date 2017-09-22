import { combineReducers } from 'redux';
import reducer1 from './reducer1';

const combReducers = combineReducers({
  loginForm: reducer1,
});

export default combReducers;
