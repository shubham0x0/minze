import { store } from '../store';
import { updateUser, updateloginStatus } from '../store/actions';

export async function userUpdateAsync(user: any) {
  console.log(`userUpdateAsync :: ${JSON.stringify(user)}`);
  store.dispatch(updateUser(user));
  store.dispatch(updateloginStatus(true));
}
