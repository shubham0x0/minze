import { createStackNavigator } from 'react-navigation';
import TestScreen from '../../screens/TestScreen';
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
    PhoneAuth: PhoneAuthStack,
    SignUp: TestScreen,
    Providers: TestScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
