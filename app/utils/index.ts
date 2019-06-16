import { openBrowserAsync } from 'expo-web-browser';
import NavigationService from './NavigationService';
import { userUpdateAsync } from './update';

export const handleUrl = (url: string) => {
  openBrowserAsync(url);
};

export const onPressLogoutAsync = async () => {
  try {
    await userUpdateAsync({});
    NavigationService.navigate('Loading', {});
  } catch (err) {
    console.warn(err);
  }
};
