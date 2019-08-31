import { loadAssetsAsync } from '../assets';

export const preloadFetch = async () => {
  try {
    /**
     *  Add all the function that needs to be
     *  evaluated before the SplashScreen hides
     */
    await loadAssetsAsync();
  } catch (err) {
    console.warn('PreloadError' + err);
  }
};
