import { store } from '../../../store';
import { IRootState } from '../reducers';
import { initialState } from '../initialState';
import { RESET_CONTEXT, GET_PERSISTED_CONTEXT } from '../actions/types';

export const persistReducer = (
  state: IRootState,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    // case 'DEV_MERGE_CONTEXT':
    // store.dispatch(persistStore(initialState));
    // return initialState;
    case RESET_CONTEXT:
      store.dispatch(persistStore(initialState));
      return initialState;
    case GET_PERSISTED_CONTEXT:
      const contexts = store.getState().contexts;
      // !!!TODO!!!! for update in context merge the structures of contexts
      if (__DEV__) return { ...initialState, network: contexts.network };
      else return contexts;
    default:
      store.dispatch(persistStore(state));
      return state;
  }
};

const persistStore = (payload: IRootState) => ({
  type: 'ROOT_CONTEXT_PERSIST',
  payload
});
