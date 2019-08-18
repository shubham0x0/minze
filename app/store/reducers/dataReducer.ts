import { UPDATE_DATA, UPDATE_LOGINSTATUS } from '../actions/types';

const initialData = {};

export const dataReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_LOGINSTATUS:
      if (action.payload === false) {
        return {
          ...initialData
        };
      }
      return state;
    default:
      return state;
  }
};
