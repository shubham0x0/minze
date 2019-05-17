import { Colors, Theme } from '../constants';
import { Fonts } from '../fonts';
const spaceGrid = 8;

export const globalStyle = {
  // text
  // ///////////////////////////////////////////////////////////////////////////
  cursive10: { fontFamily: Fonts.donButique, fontSize: 10 },
  cursive12: { fontFamily: Fonts.donButique, fontSize: 12 },
  cursive14: { fontFamily: Fonts.donButique, fontSize: 14 },
  cursive16: { fontFamily: Fonts.donButique, fontSize: 16 },
  cursive18: { fontFamily: Fonts.donButique, fontSize: 18 },
  cursiveBold12: { fontFamily: Fonts.helvitica, fontSize: 12 },
  cursiveBold16: { fontFamily: Fonts.helvitica, fontSize: 16 },
  cursiveBold18: { fontFamily: Fonts.helvitica, fontSize: 18 },
  cursiveBold20: { fontFamily: Fonts.helvitica, fontSize: 20 },
  cursiveBold22: { fontFamily: Fonts.helvitica, fontSize: 22 },
  cursiveBold24: { fontFamily: Fonts.helvitica, fontSize: 24 },

  container: {
    backgroundColor: Theme.background,
    flex: 1
  },
  activeOpacity: 0.7,
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
  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer1: { height: spaceGrid * 1 },
  spacer2: { height: spaceGrid * 2 },
  spacer3: { height: spaceGrid * 3 },
  spacer4: { height: spaceGrid * 3 },
  spacer6: { height: spaceGrid * 6 },
  spacer8: { height: spaceGrid * 8 },
  spacer11: { height: spaceGrid * 11 },
  spacer16: { height: spaceGrid * 16 },
  spacer24: { height: 24 },
  spacer48: { height: 48 },
  spacer64: { height: 64 },
  spacer88: { height: 88 },
  spacer128: { height: 128 },
  mB8: { marginBottom: 8 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },
  mT4: { marginTop: 4 },
  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },
  mH24: { marginHorizontal: 24 },
  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },
  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },
  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 },
  // margins
  // ///////////////////////////////////////////////////////////////////////////
  mB1: { marginBottom: spaceGrid },
  mB2: { marginBottom: spaceGrid * 2 },
  mB3: { marginBottom: spaceGrid * 3 },
  mB4: { marginBottom: spaceGrid * 4 },

  mL1: { marginLeft: spaceGrid },
  mL2: { marginLeft: spaceGrid * 2 },
  mL3: { marginLeft: spaceGrid * 3 },
  mL4: { marginLeft: spaceGrid * 4 },

  mR1: { marginRight: spaceGrid },
  mR2: { marginRight: spaceGrid * 2 },
  mR3: { marginRight: spaceGrid * 3 },
  mR4: { marginRight: spaceGrid * 4 },

  mTHalf: { marginTop: spaceGrid / 2 },
  mT1: { marginTop: spaceGrid },
  mT2: { marginTop: spaceGrid * 2 },
  mT3: { marginTop: spaceGrid * 3 },

  mH1: { marginHorizontal: spaceGrid * 1 },
  mH2: { marginHorizontal: spaceGrid * 2 },
  mH3: { marginHorizontal: spaceGrid * 3 },
  mH4: { marginHorizontal: spaceGrid * 4 },

  mV1: { marginVertical: spaceGrid * 1 },
  mV2: { marginVertical: spaceGrid * 2 },
  mV3: { marginVertical: spaceGrid * 3 },
  mV4: { marginVertical: spaceGrid * 4 },

  // paddings
  // ///////////////////////////////////////////////////////////////////////////
  pHalf: { padding: spaceGrid / 2 },
  p1: { padding: spaceGrid },
  p2: { padding: spaceGrid * 2 },
  p3: { padding: spaceGrid * 3 },

  pB1: { paddingBottom: spaceGrid },
  pB2: { paddingBottom: spaceGrid * 2 },
  pB3: { paddingBottom: spaceGrid * 3 },

  pL1: { paddingLeft: spaceGrid },
  pL2: { paddingLeft: spaceGrid * 2 },
  pL3: { paddingLeft: spaceGrid * 3 },

  pR1: { paddingRight: spaceGrid },
  pR2: { paddingRight: spaceGrid * 2 },
  pR3: { paddingRight: spaceGrid * 3 },

  pT1: { paddingTop: spaceGrid },
  pT2: { paddingTop: spaceGrid * 2 },
  pT3: { paddingTop: spaceGrid * 3 },

  pHHalf: { paddingHorizontal: spaceGrid / 2 },
  pH1: { paddingHorizontal: spaceGrid },
  pH2: { paddingHorizontal: spaceGrid * 2 },
  pH3: { paddingHorizontal: spaceGrid * 3 }
};
export default globalStyle;
