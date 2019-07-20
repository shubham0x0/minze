import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { loadAssetsAsync } from '../assets';
import { DropdownAlert } from '../components/extra/AlertMessage';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import { RootContextProvider } from '../context';
import { persistedStore, store } from '../store';
import { Colors, papertheme } from '../theme';
import NavigationService from '../utils/NavigationService';
import AppNavigator from './AppNavigator';

interface Props {}

const RootNavigator = (props: Props) => {
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
        console.error('PreloadError' + err);
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
            <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
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

export default RootNavigator;
