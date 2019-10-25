import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ServicesScreen from '../../screens/Main/ServicesScreen';
import { Image } from 'react-native-elements';
import MenuStack from './MenuStack';
const HomeStack = createStackNavigator(
  {
    Home: ServicesScreen,
    Menu: MenuStack
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Minze',
  tabBarIcon: ({ focused }: any) =>
    focused ? (
      <Image style={{ height: 64, width: 64 }} source={require('../../assets/images/logo/logo-focussed.png')} />
    ) : (
      <Image style={{ height: 64, width: 64 }} source={require('../../assets/images/logo/logo.png')} />
    )
};

export default HomeStack;
