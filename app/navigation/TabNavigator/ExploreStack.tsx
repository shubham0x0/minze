import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Theme } from '../../theme';
import TabBarIcon from '../../components/icons/TabBarIcon';
import ExploreScreen from '../../screens/Main/ExploreScreen';
import SearchScreen from '../../screens/Main/ExploreScreen/SearchScreen';
import MenuStack from './MenuStack';

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    Search: SearchScreen,
    Menu: MenuStack
  },
  {
    defaultNavigationOptions: {
      header: null,
      headerTitleStyle: {
        fontWeight: 'normal'
      },
      headerStyle: {
        backgroundColor: Theme.surface,
        elevation: 0
      }
    }
  }
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'ios-search'}
    />
  )
};

export default ExploreStack;
