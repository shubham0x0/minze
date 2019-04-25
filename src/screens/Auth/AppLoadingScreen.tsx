import React, { Component } from 'react';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { authStateAsync } from '../../utils/authFirebase';
import { styles } from '../../theme';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';

interface Props {
  navigation: any;
  isLoggedIn: boolean;
}

class AuthLoadingScreen extends Component<Props, {}> {
  unsubscribe: (() => void) | undefined;

  async componentDidMount() {
    this.unsubscribe = await authStateAsync();
    if (this.props.isLoggedIn) this.props.navigation.navigate('App');
    else this.props.navigation.navigate('Auth');
  }
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  render() {
    return (
      <View style={[styles.centercontainer, { backgroundColor: '#fff' }]}>
        <Text>{this.props.isLoggedIn}</Text>
        <LoadingAnimated />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(AuthLoadingScreen);
