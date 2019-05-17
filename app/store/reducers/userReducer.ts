import { UPDATE_USER } from '../actions/types';

export const userReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_USER) {
    return action.payload;
  }
  return state;
};

export const isLoggedInReducer = (state = false, action: any) => {
  if (action.type === UPDATE_USER) {
    // ie. if payload == {} then set isLoggedIn: false
    if (Object.keys(action.payload).length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return state;
};
