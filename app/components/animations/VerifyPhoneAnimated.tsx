import React from 'react';
import { animations } from '../../assets';
import { Animation } from './Animation';

const VerifyPhoneAnimated = () => (
  <Animation
    source={animations.VerifyPhone}
    containerStyles={{ alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: 300, minWidth: 100 }}
  />
);

export { VerifyPhoneAnimated };
