/**
 *
 * @description Entry point for the App
 *
 * @author Shubham Jain <s.shubjain@gmail.com>
 * @format
 */

import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import codePush from 'react-native-code-push';
import { Provider as PaperProvider } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { loadAssetsAsync } from '../assets';
import { DropdownAlert } from '../components/extra/AlertMessage';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import { ENV } from '../config/environment';
import { RootContextProvider } from '../context';
import { persistedStore, store } from '../store';
import { papertheme, Theme } from '../theme';
import NavigationService from '../utils/NavigationService';
import AppNavigator from './AppNavigator';

useScreens();

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: 120
};

const Navigator: React.FC = () => {
  const update = useRef(true);
  useEffect(() => {
    if (!update.current) {
      return;
    }
    update.current = false;
    const preloadFetch = async () => {
      try {
        /**
         *  Add all the function that needs to be
         *  evaluated before the SplashScreen hides
         */
        await loadAssetsAsync();
      } catch (err) {
        // console.error('PreloadError' + err);
      }
      SplashScreen.hide();
    };
    preloadFetch();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingAnimated />} persistor={persistedStore}>
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

export default codePush(codePushOptions)(Navigator);
