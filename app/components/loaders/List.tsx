import React from 'react';
import { View } from 'react-native';
import { animations } from '../../assets';
import { Theme, Layout } from '../../theme';
import { Animation } from '../animations/Animation';

const ListAnimated = () => (
  <Animation
    source={animations.LoadingListWithImage}
    containerStyles={{
      padding: 40,
      backgroundColor: Theme.background,
      width: Layout.window.width,
      height: Layout.window.height,
      flex: 1
    }}
  />
);

export default ListAnimated;
