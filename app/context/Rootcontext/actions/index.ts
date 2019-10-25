import { UPDATE_SERVER_STATUS, UPDATE_TOKEN_REGISTERED, RESET_CONTEXT, UPDATE_USER, location, cart } from './types';
import { LocationData } from '../reducers';

export const updateServerStatus = (onLine: boolean) => ({
  type: UPDATE_SERVER_STATUS,
  payload: onLine ? 'Online' : 'Offline'
});

interface IUpdateTokenPayload {
  authToken: string;
}

export const updateTokenRegistered = (payload: IUpdateTokenPayload) => ({
  type: UPDATE_TOKEN_REGISTERED,
  payload
});

export const resetContext = (payload: boolean) => ({
  type: RESET_CONTEXT,
  payload
});

export const updateLocation = (payload: LocationData) => ({
  type: location.UPDATE_LOCATION,
  payload
});

export const updateUser = (payload: any) => ({
  type: UPDATE_USER,
  payload
});

export const selectCurrentAddress = (payload: number) => ({
  type: location.SELECT_CURRENT_DELIVERY,
  payload: payload
});

export const addAddress = (payload: any) => ({
  type: location.ADD_ADDRESS,
  payload: payload
});

export const updateAddress = (payload: [number, any]) => ({
  type: location.UPDATE_ADDRESS,
  payload: payload
});

export const updateCart = (payload: any) => ({
  type: cart.UPDATE_CART,
  payload: payload
});

export const addCartItem = (payload: any) => ({
  type: cart.ADD_CART_ITEM,
  payload: payload
});

export const removeCartItem = (payload: any) => ({
  type: cart.REMOVE_CART_ITEM,
  payload: payload
});
