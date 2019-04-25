import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';
import CountryPicker, { CCA2Code } from 'react-native-country-picker-modal';
import firebase from 'react-native-firebase';
import { FontWeights, Theme, DropDownAlertStyles } from '../../theme';
import { TextInput, Modal, Portal } from 'react-native-paper';
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
  phoneNumber: string;
  country: {
    cca2: CCA2Code;
    callingCode: string;
  };
}

class PhoneAuthScreen extends Component<Props, State> {
  dropDownNotification: any;
  state: State = {
    verifyOTP: false,
    spinner: false,
    phoneNumber: __DEV__ ? '1234567890' : '',
    country: {
      cca2: 'IN',
      callingCode: '91'
    }
  };
  static navigationOptions = {
    header: null
  };

  getSubmitAction = () => {
    const { phoneNumber } = this.state;
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phoneNumber.match(regex)) {
      const {
        phoneNumber,
        country: { callingCode }
      } = this.state;
      const fullPhoneNumber = `+${callingCode}${phoneNumber}`;
      this.props.navigation.navigate('OTP', {
        phoneNumber: fullPhoneNumber
      });
    } else {
      this.dropDownNotification.alertWithType('error', 'Invalid Phone Number', 'Please provide valid phone number');
    }
  };

  changeCountry = (country: any) => {
    this.setState({ country });
  };

  renderFooter = () => {
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
        <Text style={styles.disclaimerText}>
          By tapping "Submit", we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.
        </Text>
      </View>
    );
  };

  renderCountryPicker = () => {
    return this.state.verifyOTP ? (
      <View />
    ) : (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        filterable
        flagType={'emoji'}
        animationType={'slide'}
        autoFocusFilter={false}
        onChange={this.changeCountry}
        cca2={this.state.country.cca2}
        translation={'common'}
      />
    );
  };

  renderCallingCode = () => {
    return this.state.verifyOTP ? (
      <View />
    ) : (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            {this.state.verifyOTP ? 'Enter your verification code.' : "What's your Phone Number ?"}
          </Text>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                alignItems: 'center'
              }}
            >
              {this.renderCountryPicker()}
              {this.renderCallingCode()}
            </View>
            <TextInput
              ref={'textInput'}
              label={'Phone Number'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              value={this.state.phoneNumber}
              placeholder={'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={styles.textInput}
              returnKeyType={'next'}
              autoFocus
              placeholderTextColor={Theme.primary}
              selectionColor={Theme.primary}
              maxLength={20}
              onSubmitEditing={this.getSubmitAction}
              render={(props: any) => (
                <TextInputMask
                  {...props}
                  onChangeText={(formatted: any, extracted: any) => {
                    this.setState({ phoneNumber: extracted });
                  }}
                  mask={'[000] [000] [0000]'}
                />
              )}
            />
          </View>
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

export default PhoneAuthScreen;

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
