import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: __DEV__
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
