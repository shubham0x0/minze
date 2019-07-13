import React from 'react';
import { View, StyleProp } from 'react-native';
import LottieView from 'lottie-react-native';
import { Colors, Layout } from '../../theme';
import { animations } from '../../assets';

const Animation = (props: AnimatedProps) => {
  return (
    <View {...props.containerStyles}>
      <LottieView {...props.lottieProps} source={props.source} />
    </View>
  );
};

Animation.defaultProps = {
  source: animations.InfoListLoading,
  containerStyles: {
    flex: 1,
    backgroundColor: Colors.background,
    width: Layout.window.width,
    maxWidth: Layout.window.width,
    maxHeight: Layout.window.height
  },
  lottieProps: {
    // source: animations.InfoListLoading,
    autoPlay: true,
    loop: true
  }
};

export interface AnimatedProps {
  source: any;
  containerStyles?: StyleProp<any>;
  lottieProps?: any;
}

export { Animation };
