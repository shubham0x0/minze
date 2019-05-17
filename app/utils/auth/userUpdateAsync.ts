import _ from 'lodash';
import { store } from '../../store';
import { updateUser } from '../../store/actions';
import { signOutUserAsync } from './signOutUserAsync';
import firebase from 'react-native-firebase';
import client from '../../graphql';
import { LOGIN_USER } from '../../graphql/mutations';
import { dispatcher } from '../../context';
import { updateTokenRegistered, updateServerStatus } from '../../context/Rootcontext/actions';

export const userUpdateAsync = async (user: any) => {
  const prevUserState = await store.getState().user;
  // update if there is a change
  if (!_.isEqual(prevUserState, user)) {
    await store.dispatch(updateUser(user));
    __DEV__ && console.warn(`userUpdateAsync :: ${JSON.stringify(user)}`);
    if (Object.keys(user).length === 0) {
      await signOutUserAsync();
    } else {
      await registerIdTokenOnServer();
    }
  }
};

const registerIdTokenOnServer = async () => {
  const { currentUser } = await firebase.auth();
  if (currentUser) {
    const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
    try {
      const mutation = {
        variables: { idToken },
        mutation: LOGIN_USER
      };
      const result = await client().mutate(mutation);
      // console.warn(JSON.stringify(result));
      if (result.data && result.data.login && result.data.login.token) {
        const update = { authToken: result.data.login.token, idTokenRegistered: true, serverStatus: 'available' };
        // store.dispatch(updateAuthToken(result.data.login.token));
        dispatcher.dispatch(updateTokenRegistered(update));
        dispatcher.dispatch(updateServerStatus(true));
      }
    } catch (error) {
      // console.warn('ERROR ----------------' + error);
    }
  }
};
