import { combineReducers } from 'redux';
import { userReducer, isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer,
});

export default rootReducer;
