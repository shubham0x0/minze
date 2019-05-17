import React from 'react';
import { StyleSheet } from 'react-native';
import { Theme, statusBarHeight, Colors } from '../../theme';
import { Header, HeaderProps } from 'react-native-elements';
interface Props extends HeaderProps {
  title: string;
}
export const HeaderBar = (props: Props) => (
  <Header
    placement="left"
    containerStyle={{
      backgroundColor: Theme.secondary,
      borderBottomColor: Colors.white,
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -statusBarHeight
    }}
    // leftComponent={{ icon: 'arrow-back', color:Colors.greyLight }}
    centerComponent={{ text: props.title || 'Account', style: { color: Theme.text } }}
    rightComponent={{ icon: 'more-vert', color: Theme.text }}
    {...props}
  />
);
