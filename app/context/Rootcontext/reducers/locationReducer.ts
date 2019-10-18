import { location } from '../actions/types';
import { IRootState } from '.';
export const locationReducer = (state: IRootState, action: any) => {
  switch (action.type) {
    case location.UPDATE_LOCATION:
      return { ...state, location: { ...state.location, ...action.payload } };
    case location.UPDATE_ADDRESSES:
      return { ...state, savedAddresses: action.payload };
    case location.UPDATE_ADDRESS:
      const addresses = state.savedAddresses;
      addresses[action.payload[0]] = action.payload[1];
      return { ...state, savedAddresses: addresses };
    case location.ADD_ADDRESS:
      return { ...state, savedAddresses: [action.payload, ...state.savedAddresses] };
    case location.SELECT_CURRENT_DELIVERY:
      return { ...state, currentDelivery: action.payload };
    default:
      return state;
  }
};
