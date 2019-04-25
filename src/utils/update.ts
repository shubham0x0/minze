import { store } from '../store';
import { updateUser } from '../store/actions';
import { signOutUser } from './authFirebase';
import * as _ from 'lodash';

export async function userUpdateAsync(user: any) {
  const prevUserState = await store.getState().user;
  // only update if there is a change
  if (!_.isEqual(prevUserState, user)) {
    __DEV__ && console.warn(`userUpdateAsync :: ${JSON.stringify(user)}`);
    if (Object.keys(user).length == 0) await signOutUser();
    store.dispatch(updateUser(user));
    // store.dispatch(updateloginStatus(user !== {}));
  }
}
