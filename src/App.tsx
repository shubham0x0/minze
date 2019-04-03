/**
 *
 *
 * @description Entry point of the App
 * @url https://github.com/mzeroes/minze
 *
 *
 * @author Shubham Jain <s.shubjain gmail com>
 * @format
 */

import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';

import { PersistGate } from 'redux-persist/integration/react';
import { styles, Theme, papertheme } from './theme/index';

import store, { persistor } from './redux/store';


interface Props {

}
interface State {
  isAuthenticated: Boolean,
  user: any,
  message: String,
  codeInput: String,
  phoneNumber: String,
  confirmResult: any,
}

export default class App extends Component<Props, State> {
  unsubscribe: null;
  constructor(props: Props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      isAuthenticated: false,
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }
  render() {
    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return null;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Theme.statusbar}
          barStyle='light-content'
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PaperProvider theme={papertheme}>
              <View style={styles.centercontainer}>
                <IconButton icon="menu" onPress={() => { }} />
                <Text> Hello, World</Text>
              </View>
            </PaperProvider>
          </PersistGate>
        </Provider>
      </View>
    )
  }
}
