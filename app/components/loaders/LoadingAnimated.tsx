import React from 'react';
import { animations } from '../../assets';
import { Theme } from '../../theme';
import { Animation } from '../animations/Animation';
import { Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoadingAnimated = () => (
  <Modal>
    <Animation source={animations.InfoListLoading2} containerStyles={{ flex: 1, backgroundColor: Theme.background }} />
  </Modal>
);

export default LoadingAnimated;
