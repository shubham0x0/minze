import { store } from '../../store';
import { updateloginStatus } from '../../store/actions';
import firebase from 'react-native-firebase';
import client from '../../graphql';
import { LOGIN_USER } from '../../graphql/mutations';
import { dispatcher } from '../../context';
import { updateTokenRegistered, updateUser } from '../../context/Rootcontext/actions';
import { isLoggedInReducer } from 'app/store/reducers/userReducer';

const registerIdTokenOnServer = async () => {
  const { currentUser } = await firebase.auth();

  if (!currentUser) {
    return false;
  }

  const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
  const mutation = {
    variables: { idToken },
    mutation: LOGIN_USER
  };
  console.warn('userUpdateAsync' + JSON.stringify(idToken));

  const result = await client().mutate(mutation);
  if (result.data && result.data.login && result.data.login.token) {
    const update = { authToken: result.data.login.token };
    // dispatcher.dispatch(updateTokenRegistered(update));

    return true;
  }

  return false;
};

export const userUpdateAsync = async (user: any) => {
  try {
    if (Object.keys(user).length === 0) {
      return;
    }
    const result = await registerIdTokenOnServer();
    if (result) {
      await store.dispatch(updateloginStatus(true));
      const User = {
        displayName: '',
        phoneNumber: '',
        email: '',
        photoURL: ''
      };

      user.providerData.forEach((element: any) => {
        Object.keys(User).forEach((key: string) => {
          if (!(element[key] === null || element[key] === '')) {
            // @ts-ignore
            User[key] = element[key];
          }
        });
      });

      await dispatcher.dispatch(updateUser(User));
    }
  } catch (error) {
    console.warn('userUpdateAsync' + JSON.stringify(error));
  }
};
