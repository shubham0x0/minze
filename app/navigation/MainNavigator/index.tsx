import React from 'react';
import { ApolloProvider } from 'react-apollo';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';
import createApolloClient from '../../graphql';
import { RootContext } from '../../context';
import MainTabNavigator from '../TabNavigator';
import { NavigationType } from '../../types';
import { StatusBar } from 'react-native';
import Colors from '../../theme/constants/colors';

interface Props {
  navigation: NavigationType;
}

const MainNavigator = (props: Props) => {
  const context = React.useContext(RootContext);
  const authToken = context.state.network.authToken;
  const client = createApolloClient(authToken);
  if (!client) return <LoadingAnimated />;
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <MainTabNavigator navigation={props.navigation} />
    </ApolloProvider>
  );
};

MainNavigator.router = MainTabNavigator.router;

export default MainNavigator;
