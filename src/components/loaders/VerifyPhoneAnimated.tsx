import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const VerifyPhoneAnimated = (props: { color: string }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      minHeight: 300,
      minWidth: 100
    }}
  >
    <LottieView source={require('../../assets/animations/verify_phone.json')} autoPlay loop />
  </View>
);

export default VerifyPhoneAnimated;
