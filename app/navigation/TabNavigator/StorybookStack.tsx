import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../../components/icons/TabBarIcon';
import StorybookUIRoot from '../../../storybook';
/**
 * For testing components library
 */
const StorybookStack = createStackNavigator(
  {
    Testing: StorybookUIRoot
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
StorybookStack.navigationOptions = {
  tabBarLabel: 'Storybook',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-more${focused ? '' : '-outline'}` : 'ios-more'}
    />
  )
};
export default StorybookStack;
