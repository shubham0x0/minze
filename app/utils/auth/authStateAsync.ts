import auth from '@react-native-firebase/auth';

import { userUpdateAsync } from './userUpdateAsync';
export const authStateAsync = async () =>
  auth().onAuthStateChanged(async (user: any) => {
    if (user) {
      await userUpdateAsync(user);
    } else {
      await userUpdateAsync({});
    }
  });
