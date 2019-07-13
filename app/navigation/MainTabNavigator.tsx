import React from 'react';
import { Platform, Image } from 'react-native';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import { Colors, Fonts } from '../theme';
import TabBarIcon from '../components/icons/TabBarIcon';
import ProfileTabScreen from '../screens/Main/AccountScreen';
import CartScreen from '../screens/Main/CartScreen';
import ExploreScreen from '../screens/Main/ExploreScreen';
import ActivitiesScreen from '../screens/Main/ActivitiesScreen';
import CustomTabBar from '../components/bars/CustomTabBar';
import Album from '../screens/Main/ExpandedListScreen';
import { images } from '../assets/preload';
import StorybookUIRoot from '../../storybook';

export const HomeStack = createStackNavigator(
  {
    Home: Album
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
      return <Image source={images.logoFocussed} style={{ marginTop: 12, borderRadius: 50, height: 60, width: 60 }} />;
    } else {
      return <Image source={images.logo} style={{ marginTop: 12, borderRadius: 50, height: 60, width: 60 }} />;
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
        backgroundColor: Colors.navigator,
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
/**
 * For testing components library
 */
export const StorybookStack = createStackNavigator(
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

export default createMaterialTopTabNavigator(
  {
    NearbyStack,
    ExploreStack,
    HomeStack,
    CartStack,
    ProfileStack,
    StorybookStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      scrollEnabled: false,
      pressOpacity: 0.8,
      pressColor: Colors.grey,
      allowFontScaling: true,
      indicatorStyle: {
        height: 0,
        borderRadius: 0,
        backgroundColor: Colors.greyLight
      },
      iconStyle: {
        height: 32,
        width: 32
      },
      labelStyle: {
        padding: 0,
        margin: 0,
        fontSize: 8,
        fontFamily: Fonts.regular
      },
      activeBackgroundColor: Colors.white,
      activeTintColor: Colors.white,
      inactiveTintColor: Colors.greyInactive,
      style: {
        backgroundColor: Colors.grey,
        borderTopWidth: 0,
        borderTopColor: Colors.white
      }
    }
  }
);
