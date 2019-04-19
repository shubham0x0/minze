import getPermission from './getPermission';
import { Permissions } from 'react-native-unimodules';
import { PermissionStatus } from 'expo-permissions/build/Permissions.types';
import { store } from '../store';
import { updateLocation } from '../store/actions';

export const getLocationUpdate = async () => {
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 2000
  // };
  const status = await getPermission(Permissions.LOCATION);
  if (status !== PermissionStatus.GRANTED) {
    // err
  } else {
    navigator.geolocation.getCurrentPosition(
      location => {
        store.dispatch(updateLocation({ ...location }));
      },
      err => {
        //re
      }
      // options
    );
    // const metro = (await Location.geocodeAsync('Rithala metro'))[0];
  }
};
