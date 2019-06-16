/**
 *
 * @description Entry point for the App
 * @url https://github.com/mzeroes/minze
 *
 * @author Shubham Jain
 * @format
 */

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';
import LoadingAnimated from './components/loaders/LoadingAnimated';
import { papertheme } from './theme';
import { persistedStore, store } from './store';
import RootNavigator from './navigation/RootNavigator';
useScreens();

interface Props {}
interface State {}
export default class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingAnimated />} persistor={persistedStore}>
          <PaperProvider theme={papertheme}>
            <RootNavigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
