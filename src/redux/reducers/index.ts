import { combineReducers, Action } from 'redux';
import {
  UPDATE_DATA,
  UPDATE_USER,
  UPDATE_SETTINGS,
  UPDATE_SUMMARY,
  UPDATE_LOGINSTATUS
} from '../actions';

const dataReducer = (state = {}, action: any ) => {
  if (action.type === UPDATE_DATA)  return {...action.payload};
  return state;
};

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

const isLoggedInReducer = (state = false, action: any) => {
  if (action.type === UPDATE_LOGINSTATUS) {
    return action.payload;
  }
  return state;
};

const userReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_USER) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  data: dataReducer,
  settings: settingsReducer,
  summary: summmaryReducer
});

export default rootReducer;
