import { colors } from '../constants/colors';

// TODO: Document this.
const Base = {
  accent: colors.offWhite,
  background: colors.white,
  brandPrimary: colors.greyBlack,
  disabled: colors.darkGrey,
  primary: colors.primary,
  secondary: colors.secondary,
  surface: colors.whiteSurface,
  tertiary: colors.tertiary
};

const Text = {
  text: Base.tertiary,
  darkText: colors.greyBlack,
  errorText: colors.red,
  headingtext: colors.darkGrey,
  subheadingtext: colors.dimgrey,
  highlightedText: colors.darkGrey,
  cursiveText: colors.darkGrey,
  infoText: colors.greyLight,
  lightText: colors.greyWhite,
  linkText: colors.blue,
  placeholderText: colors.greyOff,
  warningText: colors.yellow
};

const Extended = {
  textC: Text.lightText,
  tintColorActive: colors.tertiary,
  backdrop: colors.greyBlack,
  errorBackground: colors.darkRed,
  inactive: colors.greyLight,
  tintColorInactive: colors.dimgrey,
  statusbar: Base.tertiary,
  tabIcon: colors.dimgrey,
  tabIconActive: colors.tertiary,
  tintColor: colors.blue,
  warningBackground: colors.yellow
};

export const Theme = { ...Base, ...Text, ...Extended };
