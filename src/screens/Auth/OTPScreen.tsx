import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';
import CountryPicker, { CCA2Code } from 'react-native-country-picker-modal';
import firebase from 'react-native-firebase';
import { FontWeights, Theme, DropDownAlertStyles } from '../../theme';
import { TextInput, Modal, Portal } from 'react-native-paper';
import { userUpdateAsync } from '../../utils/update';
import TextInputMask from 'react-native-text-input-mask';
import TouchableOpacityButton from '../../components/buttons/TouchableOpacityButton';
import VerifyPhoneAnimated from '../../components/loaders/VerifyPhoneAnimated';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface State {
  verifyOTP: boolean;
  spinner: boolean;
  resendTimer: number;
  phoneNumber: string;
  firebaseConfirmResult: any;
  otp: string;
  temporaryToken: string;
}

class OTPScreen extends Component<Props, State> {
  static navigationOptions = {
    label: 'hello'
  };

  dropDownNotification: any;
  state: State = {
    verifyOTP: false,
    spinner: false,
    phoneNumber: '',
    resendTimer: 3,
    firebaseConfirmResult: null,
    otp: '',
    temporaryToken: ''
  };
  timerHandle: NodeJS.Timeout | undefined;
  componentWillMount() {
    const phoneNumber = this.props.navigation.getParam('phoneNumber');
    this.setState({
      phoneNumber
    });
  }
  unsubscribe: (() => void) | undefined;
  componentDidMount() {
    this.getCode();
    this.timerHandle = setInterval(() => {
      const { resendTimer } = this.state;
      resendTimer > 0 ? this.setState({ resendTimer: resendTimer - 1 }) : clearInterval(0);
    }, 1000);
    this.unsubscribe = firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        userUpdateAsync(user);
        // Navigate with a delay.
        this.dropDownNotification.alertWithType('success', 'Verified', 'Your phone number is verified');
        setTimeout(
          self => {
            self.props.navigation.navigate('App');
          },
          800,
          this
        );
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
      this.timerHandle = undefined;
    }
  }

  resendOTP = async () => {
    try {
      this.setState({ spinner: true });
      const { phoneNumber } = this.state;
      const firebaseConfirmResult = await firebase.auth().signInWithPhoneNumber(phoneNumber);
      this.setState({ firebaseConfirmResult, spinner: false });
      this.dropDownNotification.alertWithType('info', 'OTP Sent', 'OTP sent to your number : ' + phoneNumber);
    } catch (error) {
      this.dropDownNotification.alertWithType(
        'error',
        'ResendOTP failed',
        'Resending the OTP has failed' + __DEV__ && error
      );
    }
  };

  getCode = async () => {
    const { phoneNumber } = this.state;
    this.setState({ spinner: true });
    try {
      const firebaseConfirmResult = await firebase.auth().signInWithPhoneNumber(phoneNumber);
      this.setState({
        firebaseConfirmResult,
        verifyOTP: true,
        spinner: false,
        phoneNumber
      });
      this.dropDownNotification.alertWithType('info', 'OTP Sent', 'OTP sent to your number: ' + phoneNumber);
    } catch (error) {
      this.setState({ spinner: false });
      this.dropDownNotification.alertWithType('error', 'OTP Not Sent', 'Unable to send the OTP' + __DEV__ && error);
    }
  };

  verifyCode = async () => {
    /**
     * NOTE: onAuthStateChanged should handle update and navigation
     **/
    this.setState({
      spinner: true
    });
    const { otp, firebaseConfirmResult } = this.state;
    try {
      const onFirebaseConfirmResult = await firebaseConfirmResult.confirm(otp);
      this.setState({
        spinner: false
      });
    } catch (error) {
      this.setState({
        spinner: false
      });
      this.dropDownNotification.alertWithType(
        'error',
        'Not Verified',
        'The Otp you provided is incorrect' + __DEV__ && error
      );
    }
  };

  tryAgain = () => {
    this.setState({ verifyOTP: false });
  };

  getSubmitAction = () => {
    this.verifyCode();
  };

  renderFooter = () => {
    const { resendTimer } = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Text style={styles.wrongNumberText}>Wrong number or need a new code?</Text>
        {resendTimer === 0 ? (
          <TouchableOpacity style={{ padding: 8 }} onPress={this.resendOTP}>
            <Text style={{ color: Theme.primary, fontSize: 16 }}>resend</Text>
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              ...FontWeights.light,
              color: Theme.textDark,
              fontSize: 15
            }}
          >
            00:{resendTimer} sec
          </Text>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>{'Enter your verification code.'}</Text>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <TextInput
              ref={'textInput'}
              label={'Code'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              // onChangeText={this.onChageText}
              value={this.state.otp}
              placeholder={'OTP'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={styles.otptextInput}
              returnKeyType={'go'}
              autoFocus
              placeholderTextColor={Theme.primary}
              selectionColor={Theme.blue}
              maxLength={12}
              onSubmitEditing={this.getSubmitAction}
              render={(props: any) => (
                <TextInputMask
                  {...props}
                  onChangeText={(formatted: any, extracted: any) => {
                    this.setState({ otp: extracted });
                    if (extracted.length === 6) {
                      this.setState({ otp: extracted });
                      this.verifyCode();
                    }
                  }}
                  mask={'[000] - [000]'}
                />
              )}
            />
          </View>
          <Text>{this.state.otp}</Text>
          {this.renderFooter()}
        </View>
        <TouchableOpacityButton style={styles.button} onPress={this.getSubmitAction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacityButton>
        <Portal>
          <Modal visible={this.state.spinner}>
            <VerifyPhoneAnimated color={Theme.green} />
          </Modal>
        </Portal>
        <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
      </View>
    );
  }
}

export default OTPScreen;

const styles = StyleSheet.create({
  countryPicker: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: { flex: 1, backgroundColor: Theme.background },
  header: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 22,
    margin: 20,
    color: Theme.textDark,
    ...FontWeights.light
  },
  form: { flex: 1, margin: 20 },
  textInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 20,
    color: Theme.primary,
    ...FontWeights.light
  },
  otptextInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 42,
    textAlign: 'center',
    color: Theme.primary,
    ...FontWeights.regular
  },
  button: {
    position: 'absolute',
    bottom: 0,
    // right: 0,
    height: 45,
    width: '100%',
    // borderRadius: 50,
    backgroundColor: Theme.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Theme.background,
    fontSize: 16,
    ...FontWeights.light
  },
  wrongNumberText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
    color: Theme.textDark,
    ...FontWeights.light
  },
  disclaimerText: {
    // marginTop: 30,
    fontSize: 12,
    color: Theme.text
    // ...FontWeights.light
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  callingCodeText: {
    fontSize: 20,
    color: Theme.primary,
    paddingHorizontal: 10,
    ...FontWeights.light
  }
});
