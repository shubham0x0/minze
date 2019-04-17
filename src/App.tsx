/**
 *
 * @description Entry point for the App
 * @url https://github.com/mzeroes/minze
 *
 * @author Shubham Jain
 * @format
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './store';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './utils/NavigationService';
import { styles, papertheme } from './theme';
import { signOutUser, authStateAsync } from './utils/authFirebase';
import LoadingAnimated from './components/loaders/LoadingAnimated';
import { any } from 'prop-types';

interface Props {}
interface State {}
export default class App extends Component<Props, State> {
  unsubscribe: (() => void) | undefined;
  async componentDidMount() {
    this.unsubscribe = await authStateAsync();
    SplashScreen.hide();
  }
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={styles.centercontainer}>
              <LoadingAnimated />
            </View>
          }
          persistor={persistedStore}
        >
          <PaperProvider theme={papertheme}>
            <AppNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
