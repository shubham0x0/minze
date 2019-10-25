import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { AppState, Text } from 'react-native';
import CustomTabBar from '../../components/bars/CustomTabBar';
import { Theme, Fonts, baseStyle } from '../../theme';
import CartStack from './CartStack';
import ExploreStack from './ExploreStack';
import HomeStack from './HomeStack';
import ActivitesStack from './ActivitesStack';
import ProfileStack from './ProfileStack';
import { ApolloProvider } from 'react-apollo';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';
import createApolloClient from '../../graphql';
import { RootContext } from '../../context';
import { NavigationType } from '../../types';
import { userUpdateAsync } from '../../utils/auth/userUpdateAsync';
import { getLocationUpdate } from '../../utils/getLocation';
import { signOutUserAsync } from '../../utils';

const TabNavigator = createMaterialTopTabNavigator(
  {
    ActivitesStack,
    ExploreStack,
    CartStack,
    ProfileStack
  },
  {
    // initialRouteName: 'ActivitesStack',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      showLabel: true,
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
        ...baseStyle.heading5,
        padding: 0,
        margin: 0,
        fontSize: 10
      },
      activeTintColor: Theme.tabIconActive,
      inactiveTintColor: Theme.tabIcon,
      style: {
        backgroundColor: Theme.surface,
        borderTopWidth: 0
      }
    }
  }
);

interface Props {
  navigation: NavigationType;
}

const MainTabNavigator = (props: Props) => {
  // const [appState, setAppState] = useState(AppState.currentState);
  // const handleAppStateChange = (nextAppState: any) => {
  //   if (appState.match(/inactive|background/) && nextAppState === 'active') {
  //     // console.warn('App has come to the foreground!');
  //   }
  //   setAppState(nextAppState);
  // };
  // useEffect(() => {
  //   getLocationUpdate();
  //   AppState.addEventListener('change', handleAppStateChange);
  //   return () => {
  //     AppState.removeEventListener('change', handleAppStateChange);
  //   };
  // }, []);
  const context = React.useContext(RootContext);
  const client = createApolloClient(context.state.network.authToken);
  if (!client) {
    signOutUserAsync();
  }
  return (
    <ApolloProvider client={client}>
      <TabNavigator navigation={props.navigation} />
    </ApolloProvider>
  );
};

MainTabNavigator.router = TabNavigator.router;

export default MainTabNavigator;
