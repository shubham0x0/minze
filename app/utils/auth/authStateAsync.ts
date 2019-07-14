import firebase from 'react-native-firebase';

import { userUpdateAsync } from './userUpdateAsync';
export const authStateAsync = async () => {
  return firebase.auth().onAuthStateChanged(async (user: any) => {
    if (user) {
      console.warn('USER authStateAsync');
      await userUpdateAsync(user);
      // NavigationService.navigate('App', {});
    }
    else {
      // signOut
      await userUpdateAsync({});
    }
  });
};
