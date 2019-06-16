import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthNavigator';
import AppLoadingScreen from '../screens/Auth/AppLoadingScreen';

const AppNavigator = createSwitchNavigator(
  {
    Loading: AppLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStackNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AppNavigator);
