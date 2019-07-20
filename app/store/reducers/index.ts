import { combineReducers } from 'redux';
import { userReducer, isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';
import { authTokenReducer } from './authTokenReducer';
import { locationReducer } from './locationReducer';
import { contextsReducer } from './contextsReducer';

const appReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  location: locationReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer,
  authToken: authTokenReducer,
  contexts: contextsReducer
});

export default appReducer;
