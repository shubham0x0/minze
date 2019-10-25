import { DefaultTheme } from 'react-native-paper';
import { Theme } from './base';
import { Theme as ThemeType } from 'react-native-paper/lib/typescript/src/types';

export const papertheme: ThemeType = {
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
    backdrop: Theme.backdrop,
    onSurface: Theme.errorBackground,
    onBackground: Theme.errorBackground,
    notification: Theme.errorBackground
  }
};
