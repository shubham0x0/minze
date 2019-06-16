import React from 'react';
import { Platform, Image } from 'react-native';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import { Theme, Fonts } from '../theme';
import TabBarIcon from '../components/icons/TabBarIcon';
import ProfileTabScreen from '../screens/App/AccountScreen';
import CartScreen from '../screens/App/CartScreen';
import ExploreScreen from '../screens/App/ExploreScreen';
import ActivitiesScreen from '../screens/App/ActivitiesScreen';
import CustomTabBar from '../components/bars/CustomTabBar';
import Album from '../screens/App/ExpandedListScreen';
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
      pressColor: Theme.grey,
      allowFontScaling: true,
      indicatorStyle: {
        height: 0,
        borderRadius: 0,
        backgroundColor: Theme.greyLight
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
      activeBackgroundColor: Theme.white,
      activeTintColor: Theme.white,
      inactiveTintColor: Theme.greyInactive,
      style: {
        backgroundColor: Theme.grey,
        borderTopWidth: 0,
        borderTopColor: Theme.white
      }
    }
  }
);
