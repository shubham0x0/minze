import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../../components/icons/TabBarIcon';
import ActivitiesScreen from '../../screens/Main/ActivitiesScreen';
import MenuStack from './MenuStack';

const NearbyStack = createStackNavigator(
  {
    Activities: ActivitiesScreen,
    Menu: MenuStack
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
NearbyStack.navigationOptions = {
  tabBarLabel: 'Activities',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-restaurant${focused ? '' : '-outline'}` : 'ios-restaurant'}
    />
  )
};
