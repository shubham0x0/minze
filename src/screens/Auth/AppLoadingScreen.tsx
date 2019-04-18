import React, { Component } from 'react';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { authStateAsync } from '../../utils/authFirebase';
import { styles } from '../../theme';

interface Props {
  navigation: any;
  isLoggedIn: boolean;
}

class AuthLoadingScreen extends Component<Props, {}> {
  async componentWillMount() {
    await authStateAsync();
  }
  bootstrapAsync = async () => {
    await authStateAsync();
  };

  componentDidMount() {
    // this.bootstrapAsync();
    this.props.navigation.navigate(this.props.isLoggedIn ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.centercontainer}>
        <Text>{this.props.isLoggedIn}</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(AuthLoadingScreen);
