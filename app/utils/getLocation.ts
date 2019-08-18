import { dispatcher } from '../context';
import { updateLocation } from '../context/Rootcontext/actions';
import * as Location from 'expo-location';

export const getLocationUpdate = async () => {
  try {
    await Location.requestPermissionsAsync();
    const position = await Location.getCurrentPositionAsync({
      accuracy: 5
    });

    dispatcher.dispatch(updateLocation({ position }));
    return position;
  } catch (err) {
    console.warn('LOCATION ERRROR' + err);
    return null;
  }
};

export const reverseGeocoder = async (coords: any) => {
  try {
    return {
      title: 'Mock Title',
      address: '123, Hello, world park, Delhi',
      coords: {
        ...coords
      }
    };
  } catch (err) {
    console.warn(err);
    return {
      title: '',
      address: '',
      coords: {
        latitude: 0,
        longitude: 0
      }
    };
  }
};

export const geocoder = async (address: string) => {
  try {
    // const response = await fetch(
    //   `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${coords.latitude},${coords.longitude}&mode=retrieveAddresses&maxresults=1&gen=9&app_id=HxPqfmRPvPUbjtldsH8d&app_code=KcABDOVO3ziS5lQhkQhB-A`
    // );
    // const json = await response.json()
    return {
      title: '',
      address: '',
      coords: {
        latitude: 0,
        longitude: 0
      }
    };
  } catch (err) {
    console.warn(err);
    return {
      title: '',
      address: '',
      coords: {
        latitude: 0,
        longitude: 0
      }
    };
  }
};
