import { UPDATE_LOGINSTATUS } from '../actions/types';

export const isLoggedInReducer = (state = false, action: { payload: boolean; type: string }) => {
  if (action.type === UPDATE_LOGINSTATUS) {
    return action.payload;
  }
  return state;
};
