import React from 'react';
import { Platform, Image, View, Text, TouchableOpacity } from 'react-native';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import { Theme } from '../theme';
import TabBarIcon from '../components/icons/TabBarIcon';
import { Searchbar } from 'react-native-paper';
import ProfileTabScreen from '../screens/App/AccountScreen';
import CartScreen from '../screens/App/CartScreen';
import HomeScreen from '../screens/App/HomeScreen';
import ExploreScreen from '../screens/App/ExploreScreen';
import ActivitiesScreen from '../screens/App/ActivitiesScreen';

export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }: any) => {
    if (focused) {
      return (
        <Image
          source={require('../assets/logo.png')}
          style={{ marginTop: 12, borderRadius: 50, height: 60, width: 60 }}
        />
      );
    } else {
      return (
        <Image
          source={require('../assets/logo.png')}
          style={{ marginTop: 12, borderRadius: 50, height: 60, width: 60 }}
        />
      );
    }
  }
};

export const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    Search: TestScreen
  },
  {
    defaultNavigationOptions: {
      header: null,
      headerTitleStyle: {
        fontWeight: 'normal'
      },
      headerStyle: {
        backgroundColor: Theme.navigator,
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

export const NearbyStack = createStackNavigator(
  {
    Activities: ActivitiesScreen
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

export const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'ios-cart'}
    />
  )
};

export const ProfileStack = createStackNavigator(
  {
    Settings: ProfileTabScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'ios-contact'}
    />
  )
};

export default createMaterialTopTabNavigator(
  {
    NearbyStack,
    ExploreStack,
    HomeStack,
    CartStack,
    ProfileStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      scrollEnabled: false,
      pressOpacity: 0.7,
      pressColor: Theme.darkgrey,
      activeTintColor: Theme.primary,
      allowFontScaling: true,
      inactiveTintColor: Theme.inactiveTintColor,
      indicatorStyle: {
        height: 0,
        borderRadius: 0,
        backgroundColor: Theme.primary
      },
      iconStyle: {
        height: 32,
        width: 32
      },
      labelStyle: {
        padding: 0,
        margin: 0,
        fontSize: 11,
        fontWeight: 'bold'
      },
      activeBackgroundColor: Theme.navigator,
      style: {
        backgroundColor: Theme.tabBar,
        borderTopWidth: 1,
        borderTopColor: Theme.white
      }
    }
  }
);
