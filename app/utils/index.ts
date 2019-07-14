import { openBrowserAsync } from 'expo-web-browser';

export const handleUrl = (url: string) => {
  openBrowserAsync(url);
};

export * from './auth/onPressLogoutAsync';
