import { store } from '../store';
import { updateUser } from '../store/actions';
import { signOutUser } from './authFirebase';

export async function userUpdateAsync(user: any) {
  console.warn(`userUpdateAsync :: ${JSON.stringify(user)}`);
  if (Object.keys(user).length == 0) await signOutUser();
  store.dispatch(updateUser(user));
  // store.dispatch(updateloginStatus(user !== {}));
}
