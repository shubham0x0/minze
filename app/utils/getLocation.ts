import { dispatcher } from '../context';
import { updateLocation } from '../context/Rootcontext/actions';
import * as Location from 'expo-location';

export const getLocationUpdate = async () => {
  try {
    await Location.requestPermissionsAsync();
    const position = await Location.getCurrentPositionAsync({
      accuracy: 5
    });

    const reverseAddress = await reverseGeocoder({ ...position.coords });
    dispatcher.dispatch(
      updateLocation({
        coords: position.coords,
        address: reverseAddress
      })
    );
    return position;
  } catch (err) {
    console.warn('getLocationUpdate' + err);
    return null;
  }
};

export const reverseGeocoder = async (coords: any) => {
  try {
    const reverseAddress = await Location.reverseGeocodeAsync({ ...coords });
    return {
      title: reverseAddress[0].name,
      address: reverseAddress[0].region,
      coords: {
        ...coords
      }
    };
  } catch (err) {
    console.warn(err);
    return {
      title: '',
      address: '',
      addressData: [],
      coords: {
        ...coords
      }
    };
  }
};

export const geocoder = async (address: string) => 
  // const response = await fetch(
  //   `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${coords.latitude},${coords.longitude}&mode=retrieveAddresses&maxresults=1&gen=9&app_id=HxPqfmRPvPUbjtldsH8d&app_code=KcABDOVO3ziS5lQhkQhB-A`
  // );
  // const json = await response.json()
   ({
    title: '',
    address: '',
    coords: {
      latitude: 0,
      longitude: 0
    }
  })
;

export const searchLocation = async (search: string) => [
  {
    title: 'Mock Home1',
    address: 'House 98, Pocket 21, Sector 24, Rohini, New Delhi 110085',
    coordinate: {
      latitude: 23,
      longitude: 72
    }
  },
  {
    title: 'Mock Home2',
    address: 'House 98, Pocket 21, Sector 24, Rohini, New Delhi 110085',
    coordinate: {
      latitude: 23,
      longitude: 72
    }
  },
  {
    title: 'Mock Home3',
    address: 'House 98, Pocket 21, Sector 24, Rohini, New Delhi 110085',
    coordinate: {
      latitude: 23,
      longitude: 72
    }
  }
];
