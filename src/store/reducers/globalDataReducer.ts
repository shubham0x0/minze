import { UPDATE_DATA } from "../actions/types";

export const dataReducer = (state = {}, action: any) => {
  if (action.type === UPDATE_DATA) return { ...action.payload };
  return state;
};
