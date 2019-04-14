/**
 *
 * @description Entry point for the App
 * @url https://github.com/mzeroes/minze
 *
 * @author Shubham Jain
 * @format
 */

import React, { Component } from "react";
import { StatusBar, Text, View, Platform } from "react-native";
import firebase from "react-native-firebase";
import { Provider } from "react-redux";
import { Provider as PaperProvider, IconButton } from "react-native-paper";

import { PersistGate } from "redux-persist/integration/react";
import { styles, Theme, papertheme } from "./theme/index";

import { store, persistedStore } from "./store";
import SplashScreen from "react-native-splash-screen";
import LottieView from "lottie-react-native";
import AppNavigator from "./navigation/AppNavigator";

interface Props {}
interface State {
  isAuthenticated: Boolean;
  user: any;
  message: String;
  codeInput: String;
  phoneNumber: String;
  confirmResult: any;
}

export default class App extends Component<Props, State> {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View>
              <Text>Loading persisance</Text>
            </View>
          }
          persistor={persistedStore}
        >
          <View style={styles.container}>
            <StatusBar
              backgroundColor={Theme.statusbar}
              barStyle="light-content"
            />
            <View style={styles.centercontainer}>
              <LottieView
                source={require("./assets/animations/verify_phone.json")}
                autoPlay
                loop
              />
              <AppNavigator
                ref={navigatorRef => {
                }}
              />
            </View>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
