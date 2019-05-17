import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';
import { NavigationType } from '../../types';

interface Props {
  navigation: NavigationType;
  isLoggedIn: boolean;
}

class AuthLoadingScreen extends Component<Props, {}> {
  unsubscribe: (() => void) | undefined;
  constructor(props: Props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // console.warn(JSON.stringify(store.getState()));
    this.props.navigation.navigate(this.props.isLoggedIn ? 'App' : 'Auth');
  };

  render() {
    return <LoadingAnimated />;
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(AuthLoadingScreen);
