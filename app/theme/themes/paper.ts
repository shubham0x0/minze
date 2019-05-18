import { DefaultTheme } from 'react-native-paper';
import { Theme } from './base';

export const papertheme = {
  ...DefaultTheme,
  roundness: 3,
  dark: false,
  colors: {
    primary: Theme.primary,
    accent: Theme.accent,
    background: Theme.background,
    surface: Theme.surface,
    text: Theme.text,
    error: Theme.errorText,
    disabled: Theme.disabled,
    placeholder: Theme.placeholderText,
    backdrop: Theme.backdrop
  }
};
