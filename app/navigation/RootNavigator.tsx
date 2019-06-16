import React from 'react';
import { StatusBar } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import NavigationService from '../utils/NavigationService';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import createApolloClient from '../graphql';
import { loadAssetsAsync } from '../assets/preload';
import { Theme } from '../theme';
import { persistedStore } from '../store';

interface Props {
  authToken: string;
}

interface State {
  client: any;
}

class RootNavigator extends React.Component<Props, State> {
  state = {
    client: null
  };

  async componentDidMount() {
    // const unsubscribe = await authStateAsync();
    // console.warn(JSON.stringify(store.getState()));
    // console.warn('CLIENT TOKEN UPDATES' + this.props.authToken);
    const client = createApolloClient(this.props.authToken);
    this.setState({
      client
    });
    try {
      await loadAssetsAsync();
    } catch (error) {
      console.warn(error);
    }
    SplashScreen.hide();
  }
  render() {
    if (!this.state.client) return <LoadingAnimated />;
    return (
      // @ts-ignore
      <ApolloProvider store={persistedStore} client={this.state.client}>
        <StatusBar backgroundColor={Theme.statusbar} translucent />
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ApolloProvider>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authToken: state.authToken
});

export default connect(mapStateToProps)(RootNavigator);
