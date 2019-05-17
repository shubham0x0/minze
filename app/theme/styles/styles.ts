import { StyleSheet } from 'react-native';
import { Colors, statusBarHeight, Theme } from '../constants';
import { Fonts } from '../fonts';

export const ROUNDNESS = 6;

const styles = StyleSheet.create({
  baseContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 30
  },
  bottomTab: {
    backgroundColor: Theme.background,
    borderColor: Theme.tintColor,
    color: Theme.text
  },
  centercontainer: {
    alignItems: 'center',
    backgroundColor: Theme.background,
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: Theme.background,
    flex: 1
  },

  containerStyle: {
    paddingTop: 0,
    // marginTop: 0,
    // marginLeft: 10,
    // marginRight: 10,
    margin: 4,
    height: 46
  },
  content: {
    padding: 16
  },
  contentContainer: {
    paddingTop: 30
  },
  cursiveText: {
    color: Theme.infoText,
    fontFamily: 'space-mono',
    fontSize: 17,
    textAlign: 'center'
  },
  errorText: {
    alignSelf: 'flex-end',
    color: Colors.red,
    fontSize: 14,
    margin: 6
  },
  fab: {
    backgroundColor: Theme.primary,
    bottom: 0,
    margin: 16,
    position: 'absolute',
    right: 0
  },
  formikContainer: {
    backgroundColor: Theme.background,
    flex: 1,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24
  },
  headerStyle: {
    // height: 30,
    // paddingBottom: 30,
    // borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 1,
    // TODO: ADD a Fix
    marginTop: -20,
    borderBottomWidth: 0,
    height: 60
  },
  headingText: {
    color: Theme.headingtext,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left'
  },
  helpContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  highlightText: {
    color: Theme.highlightedText
  },
  icon: {
    height: 60,
    width: 60
  },
  image: {
    alignItems: 'center',
    height: 160,
    justifyContent: 'center',
    width: 160
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: Theme.warningBackground,
    marginTop: 20,
    padding: 10
  },
  linkLoginSignup: {
    alignItems: 'center',
    backgroundColor: Theme.secondary,
    color: Colors.white,
    padding: 12,
    width: '100%'
  },
  linkText: {
    color: Theme.linkText,
    fontSize: 14
  },
  monoText: {
    color: Theme.infoText,
    fontFamily: 'space-mono',
    fontSize: 17,
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  option: {
    backgroundColor: Theme.secondary,
    borderBottomColor: Colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  optionIconContainer: {
    marginRight: 9
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  },
  optionsTitleText: {
    fontSize: 16,
    marginBottom: 12,
    marginLeft: 15,
    marginTop: 9
  },
  rootContainer: {
    backgroundColor: Theme.background,
    marginTop: statusBarHeight
  },
  statusBar: {
    backgroundColor: Theme.statusbar,
    height: statusBarHeight
  },
  tabBarInfoText: {
    color: Theme.infoText,
    fontSize: 17,
    textAlign: 'center'
  },
  text: {
    color: Theme.text,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginTop: 6
  },
  textInput: {
    borderColor: Theme.tintColor,
    borderRadius: ROUNDNESS,
    borderWidth: 1,
    color: Theme.tintColor,
    height: 36,
    marginTop: 10,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    width: '100%'
  },
  tintColor: {
    color: Theme.background
  },
  topBarStyle: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 30,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  topheaderStyle: {
    paddingTop: 0,
    // marginTop: 0,
    // marginLeft: 10,
    // marginRight: 10,
    margin: 4,
    height: 46,
    backgroundColor: Theme.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.secondary
  },
  touchableButton: {
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: ROUNDNESS,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    overflow: 'visible',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5
  },
  welcomeImage: {
    height: 80,
    marginLeft: -10,
    marginTop: 3,
    resizeMode: 'contain',
    width: 100
  }
});

export { styles };
