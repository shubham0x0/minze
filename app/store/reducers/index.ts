import { combineReducers } from 'redux';
import { userReducer, isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';
import { authTokenReducer } from './authTokenReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  location: locationReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer,
  authToken: authTokenReducer
});

export default rootReducer;
