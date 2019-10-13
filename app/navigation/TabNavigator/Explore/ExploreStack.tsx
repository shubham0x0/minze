import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Theme } from '../../../theme';
import TabBarIcon from '../../../components/icons/TabBarIcon';
import ExploreScreen from '../../../screens/ExploreScreen';
import SearchScreen from '../../../screens/ExploreScreen/SearchScreen';
import { tabbarVisible } from '../../../utils/navigation';

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    Search: SearchScreen
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

ExploreStack.navigationOptions = ({ navigation }: any) => ({
  tabBarLabel: 'Explore',
  tabBarVisible: tabbarVisible(navigation),
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'ios-search'}
    />
  )
});

export default ExploreStack;
