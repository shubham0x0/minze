import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../../../components/icons/TabBarIcon';
import HomeScreen from '../../../screens/HomeScreen';
import ProfileTabScreen from '../../../screens/AccountScreen';
import EditProfileScreen from '../../../screens/AccountScreen/EditProfileScreen';
import { tabbarVisible } from '../../../utils/navigation/tabbarVisible';
import MenuScreen from '../../../screens/MenuScreen';

const ActivitesStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileTabScreen,
    EditProfile: EditProfileScreen,
    Menu: MenuScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

ActivitesStack.navigationOptions = ({ navigation }: any) => ({
  tabBarLabel: 'Home',
  tabBarVisible: tabbarVisible(navigation),
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-restaurant${focused ? '' : '-outline'}` : 'ios-restaurant'}
    />
  )
});

export default ActivitesStack;
