import { DefaultTheme } from 'react-native-paper';
import { Colors } from '../constants';
import { Theme } from './base';

export const formtheme = {
  ...DefaultTheme,
  roundness: 1,
  dark: false,
  colors: {
    primary: Colors.blue,
    accent: Colors.cyanBlue,
    background: Theme.background,
    surface: Theme.surface,
    text: Theme.text,
    error: Colors.red,
    disabled: Theme.disabled,
    placeholder: Theme.placeholderText,
    backdrop: Theme.backdrop
  }
};
