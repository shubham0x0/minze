import { store } from '../../../store';
import { IRootState } from '../reducers';
import { initialState } from '../initialState';
import { RESET_CONTEXT, GET_PERSISTED_CONTEXT } from '../actions/types';
import { updateloginStatus } from '../../../store/actions';

export const persistReducer = (
  state: IRootState,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case RESET_CONTEXT:
      store.dispatch(persistStore(initialState));
      store.dispatch(updateloginStatus(false));
      return initialState;
    case GET_PERSISTED_CONTEXT:
      const { contexts } = store.getState();
      return contexts;
    default:
      store.dispatch(persistStore(state));
      return state;
  }
};

const persistStore = (payload: IRootState) => ({
  type: 'ROOT_CONTEXT_PERSIST',
  payload
});
