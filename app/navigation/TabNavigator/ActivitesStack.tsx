import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../../components/icons/TabBarIcon';
import HomeScreen from '../../screens/Main/HomeScreen';
import EditLocationScreen from '../../screens/Main/EditLocationScreen';

const ActivitesStack = createStackNavigator(
  {
    Home: HomeScreen,
    Location: EditLocationScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

ActivitesStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-restaurant${focused ? '' : '-outline'}` : 'ios-restaurant'}
    />
  )
};

export default ActivitesStack;
