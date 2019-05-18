import { Fonts } from '../../fonts';
import { Theme } from '../../themes';
import { StyleSheet } from 'react-native';

export * from './styles';

export const baseSize = 8;
export const activeOpacity = 0.7;

export const baseStyle = StyleSheet.create({
  heading1: { color: Theme.headingtext, fontFamily: Fonts.bold, fontSize: 24 },
  heading2: { color: Theme.headingtext, fontFamily: Fonts.bold, fontSize: 18 },
  heading3: { color: Theme.headingtext, fontFamily: Fonts.bold, fontSize: 16 },
  heading4: { color: Theme.headingtext, fontFamily: Fonts.bold, fontSize: 14 },
  heading5: { color: Theme.headingtext, fontFamily: Fonts.bold, fontSize: 12 },

  subheading1: { color: Theme.subheadingtext, fontFamily: Fonts.medium, fontSize: 24 },
  subheading2: { color: Theme.subheadingtext, fontFamily: Fonts.medium, fontSize: 18 },
  subheading3: { color: Theme.subheadingtext, fontFamily: Fonts.medium, fontSize: 16 },
  subheading4: { color: Theme.subheadingtext, fontFamily: Fonts.medium, fontSize: 14 },
  subheading5: { color: Theme.subheadingtext, fontFamily: Fonts.medium, fontSize: 12 },

  cursive1: { color: Theme.cursiveText, fontFamily: Fonts.cursive, fontSize: 24 },
  cursive2: { color: Theme.cursiveText, fontFamily: Fonts.cursive, fontSize: 18 },
  cursive3: { color: Theme.cursiveText, fontFamily: Fonts.cursive, fontSize: 16 },
  cursive4: { color: Theme.cursiveText, fontFamily: Fonts.cursive, fontSize: 14 },
  cursive5: { color: Theme.cursiveText, fontFamily: Fonts.cursive, fontSize: 12 },

  cursiveBold1: { color: Theme.cursiveText, fontFamily: Fonts.helvitica, fontSize: 24 },
  cursiveBold2: { color: Theme.cursiveText, fontFamily: Fonts.helvitica, fontSize: 18 },
  cursiveBold3: { color: Theme.cursiveText, fontFamily: Fonts.helvitica, fontSize: 16 },
  cursiveBold4: { color: Theme.cursiveText, fontFamily: Fonts.helvitica, fontSize: 14 },
  cursiveBold5: { color: Theme.cursiveText, fontFamily: Fonts.helvitica, fontSize: 12 },

  container: {
    backgroundColor: Theme.background,
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowCenterAlign: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navHeaderStyle: {
    backgroundColor: Theme.background,
    borderBottomWidth: 0,
    elevation: 0
  },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  spacer1: { height: baseSize },
  spacer2: { height: baseSize * 2 },
  spacer3: { height: baseSize * 3 },
  spacer4: { height: baseSize * 3 },
  spacer6: { height: baseSize * 6 },
  spacer8: { height: baseSize * 8 },
  spacer11: { height: baseSize * 11 },
  spacer16: { height: baseSize * 16 },
  spacer24: { height: 24 },
  spacer48: { height: 48 },
  spacer64: { height: 64 },
  spacer88: { height: 88 },
  spacer128: { height: 128 },

  mB1: { marginBottom: baseSize },
  mB2: { marginBottom: baseSize * 2 },
  mB3: { marginBottom: baseSize * 3 },
  mB4: { marginBottom: baseSize * 4 },
  mB8: { marginBottom: 8 },

  mL1: { marginLeft: baseSize },
  mL2: { marginLeft: baseSize * 2 },
  mL3: { marginLeft: baseSize * 3 },
  mL4: { marginLeft: baseSize * 4 },

  mR1: { marginRight: baseSize },
  mR2: { marginRight: baseSize * 2 },
  mR3: { marginRight: baseSize * 3 },
  mR4: { marginRight: baseSize * 4 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },

  mTHalf: { marginTop: baseSize / 2 },
  mT1: { marginTop: baseSize },
  mT2: { marginTop: baseSize * 2 },
  mT3: { marginTop: baseSize * 3 },
  mT4: { marginTop: 4 },
  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },

  mH1: { marginHorizontal: baseSize },
  mH2: { marginHorizontal: baseSize * 2 },
  mH3: { marginHorizontal: baseSize * 3 },
  mH4: { marginHorizontal: baseSize * 4 },
  mH24: { marginHorizontal: 24 },

  mV1: { marginVertical: baseSize },
  mV2: { marginVertical: baseSize * 2 },
  mV3: { marginVertical: baseSize * 3 },
  mV4: { marginVertical: baseSize * 4 },
  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  pHalf: { padding: baseSize / 2 },
  p1: { padding: baseSize },
  p2: { padding: baseSize * 2 },
  p3: { padding: baseSize * 3 },
  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },
  pB1: { paddingBottom: baseSize },
  pB2: { paddingBottom: baseSize * 2 },
  pB3: { paddingBottom: baseSize * 3 },

  pL1: { paddingLeft: baseSize },
  pL2: { paddingLeft: baseSize * 2 },
  pL3: { paddingLeft: baseSize * 3 },

  pR1: { paddingRight: baseSize },
  pR2: { paddingRight: baseSize * 2 },
  pR3: { paddingRight: baseSize * 3 },

  pT1: { paddingTop: baseSize },
  pT2: { paddingTop: baseSize * 2 },
  pT3: { paddingTop: baseSize * 3 },

  pHHalf: { paddingHorizontal: baseSize / 2 },
  pH1: { paddingHorizontal: baseSize },
  pH2: { paddingHorizontal: baseSize * 2 },
  pH3: { paddingHorizontal: baseSize * 3 },
  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 }
});

export default baseStyle;
