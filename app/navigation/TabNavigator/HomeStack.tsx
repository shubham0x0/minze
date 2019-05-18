import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../../components/icons/TabBarIcon';
// import ExpandedList from '../../components/lists/ExpandedList';
import ServicesScreen from '../../screens/Main/ServicesScreen';
import { Image } from 'react-native-elements';
const HomeStack = createStackNavigator(
  {
    Home: ServicesScreen
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
