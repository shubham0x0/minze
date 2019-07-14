import React from 'react';
import { StatusBar } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import NavigationService from '../utils/NavigationService';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import createApolloClient from '../graphql';
import { loadAssetsAsync } from '../assets/preload';
import { Colors } from '../theme';
import { persistedStore } from '../store';
import { RootContext } from '../context';

interface Props {}

const RootNavigator = (props: Props) => {
  const [client, setClient] = React.useState(null);
  const context = React.useContext(RootContext);
  const firstUpdate = React.useRef(true)
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      console.warn('CLIENT FIRST TOKEN UPDATES');
      const token = '';
      const client = createApolloClient(token);
      setClient(client);
      SplashScreen.hide();
      return
    }
    try {
      async () => loadAssetsAsync();
      console.warn('CLIENT TOKEN UPDATES' + context.state.network.authToken);
      const client = createApolloClient(context.state.network.authToken);
      setClient(client);
    } catch (error) {
      console.warn(error);
    }
  }, [context.state.network.authToken]);

  if (!client) return <LoadingAnimated />;
  return (
    // @ts-ignore
    <ApolloProvider store={persistedStore} client={client}>
      <StatusBar backgroundColor={Colors.statusbar} translucent />
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </ApolloProvider>
  );
};

export default RootNavigator;
