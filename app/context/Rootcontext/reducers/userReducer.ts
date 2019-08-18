import { UPDATE_USER } from '../actions/types';
import { IRootState } from '.';
export const userReducer = (state: IRootState, action: any) => {
  if (action.type === UPDATE_USER) {
    return { ...state, user: action.payload };
  }
  return state;
};
