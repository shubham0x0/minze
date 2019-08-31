import { UPDATE_SERVER_STATUS, UPDATE_TOKEN_REGISTERED } from '../actions/types';
import { IRootState } from '../reducers';
import { store } from '../../../store';
import { updateloginStatus } from '../../../store/actions';

export const networkReducer = (state: IRootState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case UPDATE_SERVER_STATUS:
      const serverStatus: string = action.payload;
      return { ...state, network: { ...state.network, serverStatus } };
    case UPDATE_TOKEN_REGISTERED:
      console.warn('-------------------------' + action);
      const { authToken = '' } = action.payload;
      store.dispatch(updateloginStatus(authToken !== ''));
      return { ...state, network: { ...state.network, authToken } };
    default:
      return state;
  }
};
