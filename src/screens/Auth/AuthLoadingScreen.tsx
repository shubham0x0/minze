import React, { Component } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

interface Props {
  navigation: any;
  isLoggedIn: string;
}

class AuthLoadingScreen extends Component<Props, {}> {
  bootstrapAsync = async () => {
    // await authStateAsync();
  };

  componentDidMount() {
    this.bootstrapAsync();
    this.props.navigation.navigate(this.props.isLoggedIn ? "App" : "Auth");
  }
  render() {
    return (<View><Text>{this.props.isLoggedIn}</Text></View>);
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(AuthLoadingScreen);
