import { combineReducers } from 'redux';
import { userReducer, isLoggedInReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { settingsReducer } from './settingsReducer';
import { UPDATE_LOCATION } from '../actions/types';

export const locationReducer = (
  state = {
    coords: {
      latitude: 27.202,
      longitude: 72.21
    }
  },
  action: any
) => {
  if (action.type === UPDATE_LOCATION) {
    console.warn(UPDATE_LOCATION, state, action);
    return { ...action.payload };
  }
  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  location: locationReducer,
  isLoggedIn: isLoggedInReducer,
  settings: settingsReducer
});

export default rootReducer;
