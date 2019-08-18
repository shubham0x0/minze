import { loadAssetsAsync } from '../assets';
import { signOutUserAsync } from './auth/signOutUserAsync';

export const preloadFetch = async () => {
  try {
    /**
     *  Add all the function that needs to be
     *  evaluated before the SplashScreen hides
     */
    await loadAssetsAsync();
  } catch (err) {
    // console.error('PreloadError' + err);
  }
};
