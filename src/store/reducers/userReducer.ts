import { UPDATE_USER, UPDATE_LOGINSTATUS } from '../actions/types';

export const userReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_USER) {
    return action.payload;
  }
  return state;
};

export const isLoggedInReducer = (state = false, action: any) => {
  if (action.type === UPDATE_USER) {
    if (Object.keys(action.payload).length == 0) {
      // ie. if payload == {} then set isLoggedIn: false
      return false;
    }
    return state;
  }
  return state;
};
