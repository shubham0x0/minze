import { initialState } from "../../context/Rootcontext/initialState";

export const contextsReducer = (state = initialState, action: any) => {
  if (action.type === 'ROOT_CONTEXT_PERSIST') {
    return action.payload;
  }
  return state;
};
