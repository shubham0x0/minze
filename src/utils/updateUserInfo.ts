import firebase from 'react-native-firebase';
import { authStateAsync } from './authFirebase';

interface UpdateProfile {
  displayName?: string;
  photoURL?: string;
}

export const updateUserInfo = async (updateProfile: UpdateProfile) => {
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .updateProfile(updateProfile)
      .then(res => {
        // Update successful.
        // request a refech
        authStateAsync();
      })
      .catch(function(error) {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};

export const updateEmail = async (email: string) => {
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .updateEmail(email)
      .then(function() {
        // Update successful.
        authStateAsync();
      })
      .catch(function(error) {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};
