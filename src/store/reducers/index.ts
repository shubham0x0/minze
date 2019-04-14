import { combineReducers, Action } from 'redux';
import {
  UPDATE_DATA,
  UPDATE_USER,
  UPDATE_SETTINGS,
  UPDATE_SUMMARY,
  UPDATE_LOGINSTATUS
} from '../actions/types';
import { userReducer, isLoggedInReducer } from './userReducer';
import { dataReducer } from './globalDataReducer';


const summmaryReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_SUMMARY) return { ...action.payload };
  return state;
};

const settingsReducer = (state = [], action: any) => {
  if (action.type === UPDATE_SETTINGS) {
    return {
      ...action.payload
    };
  }
  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  // isLoggedIn: isLoggedInReducer,
  // data: dataReducer,
  // settings: settingsReducer,
  // summary: summmaryReducer
});

export default rootReducer;
