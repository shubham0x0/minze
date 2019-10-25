import React from 'react';
import { animations } from '../../assets';
import { Theme } from '../../theme';
import { Animation } from '../animations/Animation';
import { Modal } from 'react-native';

const LoadingAnimated = () => (
  <Modal>
    <Animation source={animations.InfoListLoading} containerStyles={{ flex: 1, backgroundColor: Theme.background }} />
  </Modal>
);

export default LoadingAnimated;
