import { UPDATE_DATA, IActionType } from '../actions';

const initialData = {};

export const dataReducer = (state = initialData, action: IActionType) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
