import React from 'react';
import { animations } from '../../assets';
import { Theme, Layout } from '../../theme';
import { Animation } from '../animations/Animation';
import { Modal, View } from 'react-native';

const LoadingAnimated = () => (
  <Animation
    source={animations.Loading}
    containerStyles={{
      backgroundColor: Theme.background,
      width: Layout.window.width,
      height: Layout.window.height,
      flex: 1
    }}
  />
);

export default LoadingAnimated;
