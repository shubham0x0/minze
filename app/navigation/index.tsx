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
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DropdownAlert } from '../components/extra/AlertMessage';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import { RootContextProvider } from '../context';
import persisted, { store } from '../store';
import { papertheme, Theme } from '../theme';
import NavigationService from '../utils/NavigationService';
import AppNavigator from './AppNavigator';
import { preloadFetch } from '../utils/preloadFetch';

useScreens();

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: 0
};

const Navigator: React.FC = () => {
  const update = useRef(true);
  useEffect(() => {
    if (update.current) {
      update.current = false;
      preloadFetch();
      return;
    }
  }, []);
  const persistedStore = persisted();
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ActivityIndicator
            theme={{
              colors: {
                primary: Theme.primary
              }
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: 20
            }}
          />
        }
        persistor={persistedStore.persistor}
      >
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
