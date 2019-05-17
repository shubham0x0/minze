import { networkReducer } from './networkReducer';
import { combineReducers } from './combineReducers';
import { initialState } from '../initialState';
import { persistReducer } from './persistReducer';
import { IAboveTopBarProps } from 'app/components/bars/AboveTabBar';
import { propsReducer } from './propsReducer';

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
  props: {
    aboveTopBar: IAboveTopBarProps;
  };
}

export const reducer = combineReducers(initialState, networkReducer, propsReducer, persistReducer);
