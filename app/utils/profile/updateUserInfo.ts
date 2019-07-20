import firebase from 'react-native-firebase';
import { authStateAsync } from '../auth/authStateAsync';

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
      .catch(error => {
        // An error happened.
        console.log(error);
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
      .then(() => {
        // Update successful.
        authStateAsync();
      })
      .catch(error => {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};

export const sendEmailVerification = async () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return user
      .sendEmailVerification()
      .then(() => {
        // Email sent.
      })
      .catch(error => {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};
