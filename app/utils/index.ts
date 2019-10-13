import { openBrowserAsync } from 'expo-web-browser';
// import Analytics from 'appcenter-analytics';
export const handleUrl = (url: string) => {
  openBrowserAsync(url);
};

export * from './auth/signOutUserAsync';

export const logger = (event: any) => {
  let val = event;
  if (typeof event === 'object') {
    val = JSON.stringify(event, null, 4);
  } else if (typeof event === 'function') {
    val = event.toString();
  }
  // Analytics.trackEvent(val);
  // console.log(val);
};
