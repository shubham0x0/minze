import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from '../AuthNavigator';
import AppLoadingScreen from '../../screens/Auth/AppLoadingScreen';
import MainNavigator from '../MainNavigator';

const AppNavigator = createSwitchNavigator(
  {
    Loading: AppLoadingScreen,
    Auth: AuthStackNavigator,
    App: MainNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AppNavigator);
