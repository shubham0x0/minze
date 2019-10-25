import React from 'react';
import { animations } from '../../assets';
import { Theme } from '../../theme';
import { Animation } from '../animations/Animation';
import { Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoadingAnimated = () => (
  <Modal>
    <Animation source={animations.Welcome} containerStyles={{ flex: 1, backgroundColor: Theme.background }} />
    <ActivityIndicator
      theme={{
        colors: {
          primary: Theme.primary
        }
      }}
      style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20
      }}
    />
  </Modal>
);

export default LoadingAnimated;
