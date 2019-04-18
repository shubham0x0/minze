import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Theme } from '../../theme';

const LoadingAnimated = () => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      minHeight: 300,
      minWidth: 100
    }}
  >
    <LottieView source={require('../../assets/animations/deadpool.json')} autoPlay loop />
  </View>
);

export default LoadingAnimated;
