import { combineReducers } from 'redux';
import { isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';
import { contextsReducer } from './contextsReducer';

const appReducer = combineReducers({
  data: dataReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer,
  contexts: contextsReducer
});

export default appReducer;
