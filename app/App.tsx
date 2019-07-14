/**
 *
 * @description Entry point for the App
 * @url https://github.com/shubhamxy/minze
 *
 * @author Shubham Jain <s.shubjain@gmail.com>
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { useScreens } from 'react-native-screens';
import RootNavigator from './navigation/RootNavigator';
import LoadingAnimated from './components/loaders/LoadingAnimated';
import { papertheme } from './theme';
import { persistedStore, store } from './store';
import { RootContextProvider } from './context';

useScreens();

interface Props {}
const App: React.FC = (props: Props) => {
  return (
    // @ts-ignore
    <Provider store={store}>
      <PersistGate loading={<LoadingAnimated />} persistor={persistedStore}>
        <RootContextProvider>
          <PaperProvider theme={papertheme}>
            <RootNavigator {...props} />
          </PaperProvider>
        </RootContextProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
