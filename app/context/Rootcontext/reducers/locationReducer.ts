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
    case location.UPDATE_GPS_ADDRESS:
      const adds = state.savedAddresses;
      if (adds.length === 0) {
        adds.push(action.payload);
      } else {
        // ie. last element is always updated current location address
        adds[adds.length - 1] = action.payload;
      }
      return { ...state, savedAddresses: adds };
    case location.ADD_ADDRESS:
      return { ...state, savedAddresses: [action.payload, ...state.savedAddresses] };
    case location.SELECT_CURRENT_DELIVERY:
      return { ...state, currentDelivery: action.payload };
    default:
      return state;
  }
};
