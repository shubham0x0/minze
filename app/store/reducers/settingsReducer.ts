import { UPDATE_SETTINGS } from '../actions/types';
import { IActionType } from '../actions';

export const settingsReducer = (state = [], action: IActionType) => {
  if (action.type === UPDATE_SETTINGS) {
    return {
      ...action.payload
    };
  }
  return state;
};
