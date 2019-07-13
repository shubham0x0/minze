import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';
import firebase from 'react-native-firebase';
import { FontWeights, Colors, DropDownAlertStyles } from '../../theme';
import { Modal, Portal } from 'react-native-paper';
import { userUpdateAsync } from '../../utils/update';
import TouchableOpacityButton from '../../components/touchable/TouchableOpacityButton';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { VerifyPhoneAnimated } from '../../components/animations/VerifyPhoneAnimated';
import OTPTextView from '../../components/inputs/OTPTextView';
import { Icon } from 'react-native-elements';

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
    resendTimer: __DEV__ ? 10 : 60,
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
      this.setState({ resendTimer: __DEV__ ? 10 : 60 });
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
    try {
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
    const { otp } = this.state;
    if (otp.length === 6) {
      this.verifyCode();
    } else {
      this.dropDownNotification.alertWithType(
        'error',
        'Please Enter a correct OTP',
        'The Otp you provided is incorrect'
      );
    }
  };

  renderFooter = () => {
    const { resendTimer } = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Text style={styles.wrongNumberText}>Wrong number or need a new code?</Text>
        {resendTimer === 0 ? (
          <TouchableOpacity
            style={[
              {
                alignSelf: 'flex-end',
                padding: 20,
                marginTop: 18,
                paddingTop: 4,
                paddingBottom: 4,
                borderWidth: 1,
                borderColor: Colors.primary
              }
            ]}
            onPress={this.resendOTP}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon size={16} name={'done'} type="MaterialIcons" color={Colors.primary} />
              <Text style={{ color: Colors.primary }}>Resend</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              ...FontWeights.light,
              color: Colors.textDark,
              fontSize: 16
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
          <OTPTextView
            containerStyle={{ padding: 20, flexWrap: 'wrap' }}
            textInputStyle={{ color: Colors.greyLight }}
            handleTextChange={async (value: string) => {
              this.setState({ otp: value });
              if (value.length === 6) {
                console.warn(this.state.otp);
                await this.setState({ otp: value });
                this.verifyCode();
              }
            }}
          />
          {/* <Text style={{ color: Theme.greyLight }}>{this.state.otp}</Text> */}
          {this.renderFooter()}
        </View>
        <TouchableOpacityButton style={styles.button} onPress={this.getSubmitAction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacityButton>
        <Portal>
          <Modal visible={this.state.spinner}>
            <VerifyPhoneAnimated />
          </Modal>
        </Portal>
        <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
      </View>
    );
  }
}

export default OTPScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    // right: 0,
    height: 45,
    width: '100%',
    // borderRadius: 50,
    backgroundColor: Colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.greyLight,
    fontSize: 20,
    ...FontWeights.light
  },
  container: { backgroundColor: Colors.background, flex: 1 },
  header: {
    color: Colors.textDark,
    fontSize: 22,
    marginTop: 60,
    margin: 20,
    textAlign: 'center',
    ...FontWeights.light
  },
  otptextInput: {
    color: Colors.primary,
    flex: 1,
    fontSize: 42,
    margin: 0,
    padding: 0,
    textAlign: 'center',
    ...FontWeights.regular
  },
  wrongNumberText: {
    color: Colors.textDark,
    fontSize: 14,
    margin: 10,
    textAlign: 'center',
    ...FontWeights.light
  }
});
