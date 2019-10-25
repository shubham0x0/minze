import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../../../components/icons/TabBarIcon';
import CartScreen from '../../../screens/CartScreen';
import BadgeTabIcon from '../../../components/icons/BadgeTabIcon';
const CartStack = createStackNavigator(
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
    <BadgeTabIcon
      focused={focused}
      size={26}
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'ios-cart'}
    />
  )
};

export default CartStack;
