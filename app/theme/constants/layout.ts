import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const iOS = Platform.OS === 'ios';

let iPhoneX = false;
if (iOS && (height === 812 || width === 812 || (height === 896 || width === 896))) {
  iPhoneX = true;
}

export default {
  window: {
    width,
    height
  },
  iOS,
  iPhoneX,
  isSmallDevice: width < 375
};
