import { createStackNavigator } from 'react-navigation-stack';

import OnBoardingScreen from '../../screens/Auth/OnBoardingScreen';
import PhoneAuthScreen from '../../screens/Auth/PhoneAuthScreen';
import OTPScreen from '../../screens/Auth/OTPScreen';

export const PhoneAuthStack = createStackNavigator(
  {
    PhoneAuth: PhoneAuthScreen,
    OTP: OTPScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createStackNavigator(
  {
    OnBoard: OnBoardingScreen,
    PhoneAuth: PhoneAuthStack
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
