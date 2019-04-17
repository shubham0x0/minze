import React from 'react';
import { Platform, Image, View, Text, TouchableOpacity } from 'react-native';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import { Theme } from '../theme';
import TabBarIcon from '../components/icons/TabBarIcon';
import { Searchbar } from 'react-native-paper';
import ProfileTabScreen from '../screens/App/AccountScreen';

export const HomeStack = createStackNavigator(
  {
    Home: TestScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Minze',
  tabBarIcon: ({ focused }: any) => (
    <Image source={require('../assets/logo.png')} style={{ borderRadius: 50, height: 40, width: 40 }} />
  )
};

export const ExploreStack = createStackNavigator(
  {
    Explore: TestScreen,
    Search: TestScreen
  },
  {
    defaultNavigationOptions: {
      // header: null
      headerTitle: (
        <View style={{ flex: 1 }}>
          <Searchbar autoFocus autoCapitalize="none" placeholder="Search" />
        </View>
      ),
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
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search'}
    />
  )
};

export const NearbyStack = createStackNavigator(
  {
    Activities: TestScreen
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
      name={Platform.OS === 'ios' ? `ios-restaurant${focused ? '' : '-outline'}` : 'md-restaurant'}
    />
  )
};

export const CartStack = createStackNavigator(
  {
    Inbox: TestScreen
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
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart'}
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
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      size={26}
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-contact'}
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
      activeTintColor: Theme.primary,
      inactiveTintColor: Theme.grey,
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
        fontSize: 8,
        color: '#666'
      },
      style: {
        backgroundColor: Theme.navigator,
        borderTopWidth: 1,
        borderTopColor: '#F2F2F2'
      }
    }
  }
);
