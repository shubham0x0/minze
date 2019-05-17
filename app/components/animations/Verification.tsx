import React from 'react';
import { animations } from '../../assets';
import { Theme } from '../../theme';
import { Modal } from 'react-native';
import { Animation } from './Animation';

const LoadingAnimated = () => (
  <Modal>
    <Animation source={animations.InfoListLoading} containerStyles={{ flex: 1, backgroundColor: Theme.background }} />
  </Modal>
);

export { LoadingAnimated };
