import { DefaultTheme } from 'react-native-paper';
import { Theme } from '../constants';

export const papertheme = {
  ...DefaultTheme,
  roundness: 3,
  dark: false,
  colors: {
    primary: Theme.blue,
    accent: Theme.accent,
    background: Theme.background,
    surface: Theme.surface,
    text: Theme.textLight,
    error: Theme.red,
    disabled: Theme.disabled,
    placeholder: Theme.placeholder,
    backdrop: Theme.backdrop
  }
};
