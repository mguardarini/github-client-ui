import {combineReducers} from 'redux';
import RepositoryReducers from './Repository/RepositoryReducers';
import LoginReducers from './Login/LoginReducers.js';

export default combineReducers({
  repository: RepositoryReducers,
  login: LoginReducers,
});
