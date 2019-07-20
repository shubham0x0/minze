import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, statusbarMargin } from '../../theme';
import { Header } from 'react-native-elements';
export const HeaderBar = () => (
  <Header
    placement="left"
    containerStyle={{
      backgroundColor: Colors.grey,
      borderBottomColor: Colors.blackBg,
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -statusbarMargin
    }}
    // leftComponent={{ icon: 'arrow-back', color: Theme.greyLight }}
    centerComponent={{ text: 'Account', style: { color: '#fff' } }}
    rightComponent={{ icon: 'more-vert', color: '#fff' }}
  />
);
