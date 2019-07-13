import { StyleSheet } from 'react-native';
import { Colors, statusbarMargin } from '../constants';
import { Fonts } from '../fonts';

export const ROUNDNESS = 6;

const styles = StyleSheet.create({
  baseContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 30
  },
  bottomTab: {
    backgroundColor: Colors.background,
    borderColor: Colors.tintColor,
    color: Colors.text
  },
  centercontainer: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: Colors.background,
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
    color: Colors.infoText,
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
    backgroundColor: Colors.primary,
    bottom: 0,
    margin: 16,
    position: 'absolute',
    right: 0
  },
  formikContainer: {
    backgroundColor: Colors.background,
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
    color: Colors.headingtext,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left'
  },
  helpContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  highlightText: {
    color: Colors.highlightedText
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
    backgroundColor: Colors.warningBackground,
    marginTop: 20,
    padding: 10
  },
  linkLoginSignup: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    color: Colors.white,
    padding: 12,
    width: '100%'
  },
  linkText: {
    color: Colors.link,
    fontSize: 14
  },
  monoText: {
    color: Colors.infoText,
    fontFamily: 'space-mono',
    fontSize: 17,
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  option: {
    backgroundColor: Colors.grey,
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
    backgroundColor: Colors.background,
    marginTop: statusbarMargin
  },
  statusBar: {
    backgroundColor: Colors.statusbar,
    height: statusbarMargin
  },
  tabBarInfoText: {
    color: Colors.infoText,
    fontSize: 17,
    textAlign: 'center'
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginTop: 6
  },
  textInput: {
    borderColor: Colors.tintColor,
    borderRadius: ROUNDNESS,
    borderWidth: 1,
    color: Colors.tintColor,
    height: 36,
    marginTop: 10,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    width: '100%'
  },
  tintColor: {
    color: Colors.background
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
    backgroundColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey
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
