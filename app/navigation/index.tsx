/**
 *
 * @description Entry point for the App
 *
 * @author Shubham Jain <s.shubjain@gmail.com>
 * @format
 */

import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
// import codePush from 'react-native-code-push';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DropdownAlert } from '../components/extra/AlertMessage';
import SplashScreen from 'react-native-splash-screen';
import { RootContextProvider } from '../context';
import persisted, { store } from '../store';
import { papertheme, Theme } from '../theme';
import NavigationService from '../utils/navigation/NavigationService';
import AppNavigator from './AppNavigator';
import { preloadFetch } from '../utils/preloadFetch';

useScreens();

// const codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
//   minimumBackgroundDuration: 0
// };

const Navigator: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        await Promise.all([preloadFetch()]);
      } catch ({ message }) {
        console.error('Navigation: Error loading assets: ' + message);
      } finally {
        SplashScreen.hide();
      }
    })();
  }, []);
  const persistedStore = persisted();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore.persistor}>
        <RootContextProvider>
          <PaperProvider theme={papertheme}>
            <StatusBar barStyle="light-content" backgroundColor={Theme.statusbar} />
            <AppNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <DropdownAlert />
          </PaperProvider>
        </RootContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default Navigator;
