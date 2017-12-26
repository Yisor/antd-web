import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { login } from '../containers/login';

export default combineReducers({
  login,
  router: routerReducer
});