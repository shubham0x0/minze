import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';
import { NavigationType } from '../../types';

interface Props {
  navigation: NavigationType;
  isLoggedIn: boolean;
}

const AuthLoadingScreen: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.navigation.navigate(props.isLoggedIn ? 'App' : 'Auth');
  }, [props.isLoggedIn, props.navigation]);
  return <LoadingAnimated />;
};
const mapStateToProps = (state: { isLoggedIn: boolean }) => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(AuthLoadingScreen);
