import { UPDATE_LOCATION } from '../actions/types';
export const locationReducer = (
  state = {
    coords: {
      latitude: 27.202,
      longitude: 72.21
    }
  },
  action: any
) => {
  if (action.type === UPDATE_LOCATION) {
    return { ...action.payload };
  }
  return state;
};
