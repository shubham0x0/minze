import { networkReducer } from './networkReducer';
import { combineReducers } from './combineReducers';
import { initialState } from '../initialState';
import { persistReducer } from './persistReducer';
import { IAboveTopBarProps } from '../../../components/bars/AboveTabBar';
import { propsReducer } from './propsReducer';
import { locationReducer } from './locationReducer';
import { userReducer } from './userReducer';

export interface IRootContextProps {
  state: IRootState;
  dispatch?: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}

export interface IAddress {
  title: string;
  address: string;
  addressData?: any[];
  deliveryOption?: number;
  coords?: {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
    heading?: number;
    speed?: number;
  };
  timestamp?: number;
}

interface LocationData {
  coords: {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
    heading?: number;
    speed?: number;
  };
  timestamp?: number;
}

export interface IRootState {
  loading: boolean;
  currentDelivery: number; // currently selected delivery address index
  savedAddresses: IAddress[]; // all saved address
  location: LocationData | null; // gps location coords
  user: any; // user details
  network: {
    serverStatus: string;
    idTokenRegistered: boolean; // idTokenRegistered on the backend server
    authToken: string; // token from backend server
  };
  props: {
    aboveTopBar: IAboveTopBarProps;
  };
}

export const reducer = combineReducers(
  initialState,
  networkReducer,
  userReducer,
  locationReducer,
  propsReducer,
  persistReducer
);
