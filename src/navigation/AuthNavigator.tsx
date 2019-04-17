import { createStackNavigator } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import OnBoardingScreen from '../screens/Auth/OnBoardingScreen';
import PhoneAuthScreen from '../screens/Auth/PhoneAuthScreen';

export default createStackNavigator({
  OnBoard: OnBoardingScreen,
  PhoneAuth: PhoneAuthScreen,
  SignUp: TestScreen,
  Providers: TestScreen
});
