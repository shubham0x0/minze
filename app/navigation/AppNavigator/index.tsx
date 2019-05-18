import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from '../AuthNavigator';
import AppLoadingScreen from '../../screens/Auth/AppLoadingScreen';
import MainTabNavigator from '../TabNavigator';

const AppNavigator = createSwitchNavigator(
  {
    Loading: AppLoadingScreen,
    Auth: AuthStackNavigator,
    App: MainTabNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AppNavigator);
