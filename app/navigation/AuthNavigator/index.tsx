import { createStackNavigator } from 'react-navigation-stack';

import OnBoardingScreen from '../../screens/OnboardingScreen';
import PhoneAuthScreen from '../../screens/AuthScreen/PhoneAuthScreen';
import OTPScreen from '../../screens/AuthScreen/OTPScreen';

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
