import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
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

const TabNavigator = createMaterialTopTabNavigator(
  {
    ActivitesStack,
    ExploreStack,
    // HomeStack,
    CartStack,
    ProfileStack
  },
  {
    initialRouteName: 'ActivitesStack',
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
        // color: Theme.darkText,
        padding: 0,
        margin: 0,
        fontSize: 10
      },
      // activeBackgroundColor: Theme.background,
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
  const authToken = context.state.network.authToken;
  const client = createApolloClient(authToken);
  if (!client) return <LoadingAnimated />;
  return (
    <ApolloProvider client={client}>
      <TabNavigator navigation={props.navigation} />
    </ApolloProvider>
  );
};

MainTabNavigator.router = TabNavigator.router;

export default MainTabNavigator;
