import firebase from 'react-native-firebase';

import { userUpdateAsync } from './userUpdateAsync';
export const authStateAsync = async () =>
  firebase.auth().onAuthStateChanged(async (user: any) => {
    if (user) {
      await userUpdateAsync(user);
    } else {
      await userUpdateAsync({});
    }
  });
