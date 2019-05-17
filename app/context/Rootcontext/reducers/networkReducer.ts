import { UPDATE_SERVER_STATUS, UPDATE_TOKEN_REGISTERED } from '../actions/types';
import { IRootState } from '../reducers';

export const networkReducer = (state: IRootState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case UPDATE_SERVER_STATUS:
      const serverStatus: string = action.payload;
      return { ...state, network: { ...state.network, serverStatus } };
    case UPDATE_TOKEN_REGISTERED:
      const { idTokenRegistered = false, authToken = '' } = action.payload;
      return { ...state, network: { ...state.network, idTokenRegistered, authToken } };
    default:
      return state;
  }
};
