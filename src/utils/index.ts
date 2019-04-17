import { openBrowserAsync } from 'expo-web-browser';
import { signOutUser } from './authFirebase';
import { store } from '../store';
import { updateUser, updateloginStatus } from '../store/actions';
import NavigationService from './NavigationService';

export const handleUrl = (url: string) => {
  openBrowserAsync(url);
};

export const onPressLogoutAsync = async () => {
  try {
    await signOutUser();
    store.dispatch(updateUser({}));
    store.dispatch(updateloginStatus(false));
    NavigationService.navigate('Loading', {});
  } catch (err) {
    console.log(err);
  }
};
