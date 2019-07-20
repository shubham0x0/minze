import { networkReducer } from './networkReducer';
import { combineReducers } from './combineReducers';
import { initialState } from '../initialState';
import { persistReducer } from './persistReducer';

export interface IRootContextProps {
  state: IRootState;
  dispatch?: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}

export interface IRootState {
  network: {
    serverStatus: string;
    idTokenRegistered: boolean;
    authToken: string;
  };
}

export const reducer = combineReducers(initialState, networkReducer, persistReducer);
