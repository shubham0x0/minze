import { UPDATE_SETTINGS } from '../actions/types';

export const settingsReducer = (state = [], action: any) => {
  if (action.type === UPDATE_SETTINGS) {
    return {
      ...action.payload,
    };
  }
  return state;
};
