import firebase from 'react-native-firebase';
import { userUpdateAsync } from './update';
import NavigationService from './NavigationService';

export const signOutUser = async () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.warn('USER SIGNED OUT');
    })
    .catch((error: any) => {
      console.warn(error);
    });
};

export const authStateAsync = async () => {
  return firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      userUpdateAsync(user);
      NavigationService.navigate('App', {});
    } else {
      // signOut
      userUpdateAsync({});
      signOutUser();
      NavigationService.navigate('Auth', {});
    }
  });
};
