import { UPDATE_USER, UPDATE_LOGINSTATUS } from '../actions/types';

export const userReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_USER) {
    return action.payload;
  }
  return state;
};

export const isLoggedInReducer = (state = false, action: any) => {
  if (action.type === UPDATE_LOGINSTATUS) {
    return action.payload;
  }
  return state;
};
