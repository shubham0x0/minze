import { IActionType } from '../actions';

export const contextsReducer = (state = {}, action: IActionType) => {
  if (action.type === 'ROOT_CONTEXT_PERSIST') {
    return action.payload;
  }
  return state;
};
