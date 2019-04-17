import { DefaultTheme } from 'react-native-paper';
import { Theme, statusbarMargin } from './constants';
import Layout from './constants/Layout';
import styles from './styles';
import { Typography, FontWeights } from './Typography';
import DropDownAlertStyles from './DropDownStyle';
export { Theme, statusbarMargin, styles, Layout, Typography, FontWeights, DropDownAlertStyles };

export const papertheme = {
  ...DefaultTheme,
  roundness: 3,
  dark: false,
  colors: {
    primary: Theme.blue,
    accent: Theme.accent,
    background: Theme.background,
    surface: Theme.surface,
    text: Theme.textDark,
    error: Theme.red,
    disabled: Theme.disabled,
    placeholder: Theme.placeholder,
    backdrop: Theme.backdrop
  }
};

export const formtheme = {
  ...DefaultTheme,
  roundness: 1,
  dark: false,
  colors: {
    primary: Theme.blue,
    accent: Theme.accent,
    background: '#fff',
    surface: Theme.surface,
    text: Theme.textDark,
    error: Theme.red,
    disabled: Theme.disabled,
    placeholder: Theme.placeholder,
    backdrop: Theme.backdrop
  }
};
