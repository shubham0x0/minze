import { Image } from 'react-native';
// import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import preloadImages from '../assets/preload/preloadImages';

// // cache fonts
// export const cacheFonts = (fonts: any) => {
//   const mappedFonts = fonts.map((item: any) => {
//     Font.loadAsync(item);
//   });
//   return mappedFonts;
// };

// cache images
export const cacheImages = (images: number[] | string[]) => {
  const imagesArray = Object.values(images);
  return imagesArray.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
export const loadAssetsAsync = async () => {
  // preload assets
  // TODO: this is not working???
  // instead we are using react-native-assets which links the font files
  // const fontAssets = cacheFonts(preloadFonts);
  // @ts-ignore
  const imageAssets = cacheImages(preloadImages);
  // promise load all
  // return Promise.all([...imageAssets, ...fontAssets]);
  return Promise.all([...imageAssets]);
};
