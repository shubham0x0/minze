import { iOSColors } from 'react-native-typography';
import { Theme } from '../constants';
import { FontWeights } from '../fonts/typography';
const { orange, red } = iOSColors;

const DropDownAlertStyles = {
  updateStatusBar: true,
  successColor: Theme.green,
  infoColor: Theme.brandPrimary,
  warnColor: orange,
  errorColor: red,
  closeInterval: 8000,
  userNativeDriver: true,
  titleStyle: {
    ...FontWeights.light,
    fontSize: 15,
    textAlign: 'left',
    color: Theme.white,
    backgroundColor: 'transparent'
  },
  messageStyle: {
    ...FontWeights.light,
    fontSize: 11,
    textAlign: 'left',
    color: Theme.white,
    backgroundColor: 'transparent'
  },
  defaultContainer: {
    padding: 6,
    // paddingHorizontal: 8,
    flexDirection: 'row'
    // marginTop: statusbarMargin
  }
};

export { DropDownAlertStyles };
