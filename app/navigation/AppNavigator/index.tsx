import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from '../AuthNavigator';
import AppLoadingScreen from '../../screens/Auth/AppLoadingScreen';
import MainTabNavigator from '../TabNavigator';
import TestScreen from '../../screens/TestScreen';

const AppNavigator = createSwitchNavigator({
  Loading: AppLoadingScreen,
  Auth: AuthStackNavigator,
  App: MainTabNavigator
});

export default createAppContainer(AppNavigator);
