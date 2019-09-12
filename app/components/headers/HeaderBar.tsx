import React from 'react';
import { StyleSheet } from 'react-native';
import { Theme, statusBarHeight, Colors, baseStyle } from '../../theme';
import { Header, HeaderProps } from 'react-native-elements';

export interface Props extends HeaderProps {
  title?: string;
}
export const HeaderBar = (props: Props) => (
  <Header centerComponent={{ text: props.title, style: { ...baseStyle.heading3, color: Theme.text } }} {...props} />
);

HeaderBar.defaultProps = {
  placement: 'left',
  containerStyle: {
    backgroundColor: Theme.secondary,
    borderBottomColor: Colors.greyLight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -statusBarHeight
  },
  rightComponent: { icon: 'more-vert', color: Theme.text }
};
