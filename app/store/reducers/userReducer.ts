import { UPDATE_LOGINSTATUS } from '../actions/types';
import { IActionType } from '../actions';

export const isLoggedInReducer = (state = false, action: IActionType) => {
  if (action.type === UPDATE_LOGINSTATUS) {
    return action.payload;
  }
  return state;
};
