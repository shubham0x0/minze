import { networkReducer } from './networkReducer';
import { combineReducers } from './combineReducers';
import { initialState } from '../initialState';
import { persistReducer } from './persistReducer';
import { IAboveTopBarProps } from '../../../components/bars/AboveTabBar';
import { propsReducer } from './propsReducer';
import { locationReducer } from './locationReducer';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';

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

export interface LocationData {
  coords: {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
    heading?: number;
    speed?: number;
  };
  timestamp?: number;
  address?: IAddress;
}
interface ICartItem {
  quantity: number;
  amount_per_item: number;
  discount: string;
  total_amount: number;
  dish_id: string;
  name: string;
  dish_image: {
    url: string;
  };
  instructions: any;
}

export interface IRootState {
  cart: {
    total: {
      discount: string;
      amount: string;
    };
    restaurant_name: string;
    cart_id: string;
    items: {
      [key: string]: ICartItem;
    };
  };
  currentDelivery: number; // currently selected delivery address index
  savedAddresses: IAddress[]; // all saved address
  location: LocationData; // gps location coords
  user: any; // user details
  network: {
    serverStatus: string;
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
  cartReducer,
  persistReducer
);
