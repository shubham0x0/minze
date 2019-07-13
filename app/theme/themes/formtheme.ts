import { DefaultTheme } from 'react-native-paper';
import { Colors } from '../constants';

export const formtheme = {
  ...DefaultTheme,
  roundness: 1,
  dark: false,
  colors: {
    primary: Colors.blue,
    accent: Colors.accent,
    background: Colors.background,
    surface: Colors.surface,
    text: Colors.textLight,
    error: Colors.red,
    disabled: Colors.disabled,
    placeholder: Colors.placeholder,
    backdrop: Colors.backdrop
  }
};
