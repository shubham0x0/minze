import { isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';
import { contextsReducer } from './contextsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  data: dataReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer,
  contexts: contextsReducer
});
