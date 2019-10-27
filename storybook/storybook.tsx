import React, { useEffect } from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
configure(() => {
  require('./storybook-registry');
}, module);

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingAnimated from '../app/components/loaders/LoadingAnimated';
import { RootContextProvider } from '../app/context';
import { persistor, store } from '../app/store';
import { papertheme } from '../app/theme';
import SplashScreen from 'react-native-splash-screen';

const StorybookUI = getStorybookUI({ port: 9001, host: 'localhost', onDeviceUI: true });

export const StorybookUIRoot: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingAnimated />} persistor={persistor}>
        <RootContextProvider>
          <PaperProvider theme={papertheme}>
            <StorybookUI />
          </PaperProvider>
        </RootContextProvider>
      </PersistGate>
    </Provider>
  );
};
