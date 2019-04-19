"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var constants_1 = require("./constants");
var ROUNDNESS = 6;
var styles = react_native_1.StyleSheet.create({
    statusBar: {
        backgroundColor: constants_1.Theme.statusbar,
        height: constants_1.statusbarMargin
    },
    container: {
        flex: 1,
        backgroundColor: constants_1.Theme.background
    },
    rootContainer: {
        backgroundColor: constants_1.Theme.background
    },
    centercontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants_1.Theme.background
    },
    headerStyle: {
        backgroundColor: constants_1.Theme.statusbar,
        // height: 30,
        // paddingBottom: 30,
        // borderBottomWidth: 0,
        borderColor: constants_1.Theme.statusbar,
        shadowColor: 'transparent',
        elevation: 1,
        // TODO: ADD a Fix
        marginTop: -20,
        borderBottomWidth: 0,
        height: 60
    },
    containerStyle: {
        paddingTop: 0,
        // marginTop: 0,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 4,
        height: 46,
        backgroundColor: constants_1.Theme.statusbar,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: constants_1.Theme.statusbar
    },
    topBarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 30,
        width: '100%',
        backgroundColor: constants_1.Theme.statusbar
    },
    topheaderStyle: {
        paddingTop: 0,
        // marginTop: 0,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 4,
        height: 46,
        backgroundColor: constants_1.Theme.grey,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: constants_1.Theme.grey
    },
    bottomTab: {
        backgroundColor: constants_1.Theme.background,
        color: constants_1.Theme.text,
        borderColor: constants_1.Theme.tintColor
    },
    tintColor: {
        color: constants_1.Theme.background
    },
    formikContainer: {
        flex: 1,
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: constants_1.Theme.background
    },
    text: {
        fontSize: 14,
        marginTop: 6,
        color: constants_1.Theme.text
    },
    errorText: {
        fontSize: 14,
        margin: 6,
        alignSelf: 'flex-end',
        color: constants_1.Theme.red
    },
    textInput: {
        color: constants_1.Theme.tintColor,
        height: 36,
        width: '100%',
        borderColor: constants_1.Theme.tintColor,
        borderWidth: 1,
        marginTop: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: ROUNDNESS
    },
    touchableButton: {
        shadowOpacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowRadius: 1.5,
        shadowOffset: { width: 0, height: 1 },
        overflow: 'visible',
        shadowColor: 'black',
        alignItems: 'center',
        backgroundColor: constants_1.Theme.blue,
        borderRadius: ROUNDNESS,
        marginTop: 20
    },
    contentContainer: {
        paddingTop: 30
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60
    },
    icon: {
        width: 60,
        height: 60
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    },
    baseContainer: {
        alignItems: 'flex-start',
        marginHorizontal: 30
    },
    highlightText: {
        color: constants_1.Theme.highlightedText
    },
    headingText: {
        fontSize: 17,
        color: constants_1.Theme.headingtext,
        lineHeight: 24,
        textAlign: 'left'
    },
    infoContainer: {
        backgroundColor: constants_1.Theme.warningBackground,
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    tabBarInfoText: {
        fontSize: 17,
        color: constants_1.Theme.infoText,
        textAlign: 'center'
    },
    monoText: {
        fontSize: 17,
        color: constants_1.Theme.infoText,
        textAlign: 'center',
        fontFamily: 'space-mono'
    },
    navigationFilename: {
        marginTop: 5
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    linkLoginSignup: {
        color: constants_1.Theme.white,
        alignItems: 'center',
        backgroundColor: constants_1.Theme.grey,
        padding: 12,
        width: '100%'
    },
    linkText: {
        fontSize: 14,
        color: constants_1.Theme.link
    },
    optionsTitleText: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 9,
        marginBottom: 12
    },
    optionIconContainer: {
        marginRight: 9
    },
    option: {
        backgroundColor: constants_1.Theme.grey,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: constants_1.Theme.black
    },
    optionText: {
        fontSize: 15,
        marginTop: 1
    },
    content: {
        padding: 16
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: constants_1.Theme.primary,
        bottom: 0
    }
});
exports["default"] = styles;
