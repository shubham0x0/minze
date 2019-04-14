import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { AuthStackNavigator } from './AuthNavigator';
import TestScreen from '../screens/TestScreen';

const AppNavigator = createSwitchNavigator(
  {
    Loading: TestScreen,
    App: MainTabNavigator,
    Auth: AuthStackNavigator
  },
  {
    initialRouteName: "Loading"
  }
);

export default createAppContainer(AppNavigator);
