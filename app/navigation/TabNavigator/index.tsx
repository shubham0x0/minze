import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import CustomTabBar from '../../components/bars/CustomTabBar';
import { Theme, Colors, Fonts } from '../../theme';
import CartStack from './CartStack';
import ExploreStack from './ExploreStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

export default createMaterialTopTabNavigator(
  {
    HomeStack,
    ExploreStack,
    CartStack,
    ProfileStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      scrollEnabled: false,
      pressOpacity: 0.8,
      pressColor: Theme.secondary,
      allowFontScaling: true,
      indicatorStyle: {
        height: 0
      },
      iconStyle: {
        height: 36,
        width: 36
      },
      labelStyle: {
        color: Theme.darkText,
        padding: 0,
        margin: 0,
        fontSize: 10,
        fontFamily: Fonts.regular
      },
      // activeBackgroundColor: Theme.background,
      activeTintColor: Theme.tabIconActive,
      inactiveTintColor: Theme.inactive,
      style: {
        backgroundColor: Theme.secondary,
        borderTopWidth: 0
      }
    }
  }
);
