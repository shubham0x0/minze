import { store } from '../store';
import { updateUser, updateAuthToken } from '../store/actions';
import { signOutUser } from './authFirebase';
import * as _ from 'lodash';
import firebase from 'react-native-firebase';
import client from '../graphql';
import { LOGIN_USER } from '../graphql/mutations';

export async function userUpdateAsync(user: any) {
  const prevUserState = await store.getState().user;
  // only update if there is a change
  if (!_.isEqual(prevUserState, user)) {
    // __DEV__ && console.warn(`userUpdateAsync :: ${JSON.stringify(user)}`);
    if (Object.keys(user).length === 0) await signOutUser();
    // UPDATE THE user
    const { currentUser } = await firebase.auth();
    if (currentUser) {
      const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
      // console.warn('YO' + idToken);

      client()
        .mutate({
          variables: { idToken: idToken },
          mutation: LOGIN_USER
        })
        .then(result => {
          if (result.data && result.data.login && result.data.login.token) {
            console.warn('TOKEN DISPATCH');
            store.dispatch(updateAuthToken(result.data.login.token));
          } else {
            // TODO HANDLE GRACEFULLY
            throw Error('RESET');
          }
        })
        .catch(error => {
          console.warn('ERROR' + error);
        });
    }
    store.dispatch(updateUser(user));
  }
}
