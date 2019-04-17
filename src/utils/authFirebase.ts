import firebase from 'react-native-firebase';
import { userUpdateAsync } from './update';

export const signOutUser = async () => {
  firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch((error: any) => {
      console.warn(error);
    });
};

export const authStateAsync = async () => {
  return await firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      userUpdateAsync(user);
    } else {
      // signOut
      userUpdateAsync({});
      signOutUser();
    }
  });
};
