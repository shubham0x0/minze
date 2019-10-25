import auth from '@react-native-firebase/auth';

import { authStateAsync } from '../auth/authStateAsync';

interface UpdateProfile {
  displayName?: string;
  photoURL?: string;
}

export const updateUserInfo = async (updateProfile: UpdateProfile) => {
  const user = auth().currentUser;
  if (user) {
    user
      .updateProfile(updateProfile)
      .then(() => {
        // Update successful.
        // request a refech
        authStateAsync();
      })
      .catch(() => {
        // An error happened.
        // console.log(error);
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};

export const updateEmail = async (email: string) => {
  const user = auth().currentUser;
  if (user) {
    user
      .updateEmail(email)
      .then(() => {
        // Update successful.
        authStateAsync();
      })
      .catch(() => {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};

export const sendEmailVerification = async () => {
  const user = auth().currentUser;
  if (user) {
    return user
      .sendEmailVerification()
      .then(() => {
        // Email sent.
      })
      .catch(() => {
        // An error happened.
      });
  } else {
    throw Error('USER DO NOT EXIST LOGIN AGAIN');
  }
};
