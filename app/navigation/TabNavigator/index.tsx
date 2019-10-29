import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '../../components/bars/CustomTabBar';
import { Theme, baseStyle } from '../../theme';
import CartStack from './Cart/CartStack';
import ExploreStack from './Explore/ExploreStack';
import ActivitesStack from './Profile/ActivitesStack';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from '../../graphql';
import { RootContext } from '../../context';
import { NavigationType } from '../../types';
import { signOutUserAsync } from '../../utils';

const TabNavigator = createMaterialTopTabNavigator(
  {
    ExploreStack,
    ActivitesStack,
    CartStack
  },
  {
    initialRouteName: 'ActivitesStack',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      scrollEnabled: false,
      pressOpacity: 0.8,
      pressColor: Theme.accent,
      indicatorStyle: {
        height: 0
      },
      iconStyle: {
        alignItems: 'center',
        height: 22,
        width: 22
      },
      labelStyle: {
        ...baseStyle.heading5,
        paddingTop: 4,
        margin: 0,
        fontSize: 8
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
