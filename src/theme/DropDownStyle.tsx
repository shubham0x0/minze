import { Platform } from 'react-native';
import { iOSColors } from 'react-native-typography';
import { Theme, statusbarMargin } from './constants';
import { FontWeights } from './Typography';
const { green, orange, red } = iOSColors;

export default {
  updateStatusBar: false,
  successColor: green,
  infoColor: Theme.primary,
  warnColor: orange,
  errorColor: red,
  closeInterval: 2000,
  userNativeDriver: true,
  titleStyle: {
    ...FontWeights.light,
    fontSize: 18,
    paddingVertical: 4,
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent'
  },
  messageStyle: {
    ...FontWeights.light,
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent'
  },
  defaultContainer: {
    padding: 6,
    paddingHorizontal: 8,
    flexDirection: 'row'
    // marginTop: statusbarMargin
  }
};
