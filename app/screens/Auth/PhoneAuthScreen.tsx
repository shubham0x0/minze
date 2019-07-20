import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';
import CountryPicker, { CCA2Code } from 'react-native-country-picker-modal';
import { FontWeights, Colors, DropDownAlertStyles } from '../../theme';
import { TextInput, Modal, Portal } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import TouchableOpacityButton from '../../components/touchable/TouchableOpacityButton';
import { VerifyPhoneAnimated } from '../../components/animations';
import { NavigationType } from '../../types';

interface Props {
  navigation: NavigationType;
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

  renderFooter = () => (
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

  renderCountryPicker = () => {
    enum FlagType {
      FLAT = 'flat',
      EMOJI = 'emoji'
    }
    enum AnimationType {
      SLIDE = 'slide',
      FADE = 'fade',
      NONE = 'none'
    }
    return this.state.verifyOTP ? (
      <View />
    ) : (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        filterable
        flagType={FlagType.FLAT}
        animationType={AnimationType.SLIDE}
        autoFocusFilter={false}
        onChange={this.changeCountry}
        cca2={this.state.country.cca2}
        translation={'common'}
      />
    );
  };

  renderCallingCode = () =>
    this.state.verifyOTP ? (
      <View />
    ) : (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );

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
              // label={'Phone Number'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              value={this.state.phoneNumber}
              placeholder={'Phone'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[{ fontSize: 24 }, styles.textInput]}
              returnKeyType={'next'}
              autoFocus
              placeholderTextColor={Colors.primary}
              selectionColor={Colors.primary}
              maxLength={20}
              onSubmitEditing={this.getSubmitAction}
              render={(props: any) => (
                <TextInputMask
                  {...props}
                  allowFontScaling
                  style={[{ fontSize: 24 }, styles.textInput]}
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
            <VerifyPhoneAnimated />
          </Modal>
        </Portal>
        <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
      </View>
    );
  }
}

export default PhoneAuthScreen;

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
  callingCodeText: {
    color: Colors.primary,
    fontSize: 28,
    paddingHorizontal: 10,
    ...FontWeights.light
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: { backgroundColor: Colors.background, flex: 1 },
  disclaimerText: {
    // marginTop: 30,
    fontSize: 12,
    color: Colors.text
    // ...FontWeights.light
  },
  header: {
    color: Colors.textDark,
    fontSize: 22,
    marginTop: 60,
    margin: 20,
    textAlign: 'center',
    ...FontWeights.light
  },
  textInput: {
    color: Colors.primary,
    flex: 1,
    marginBottom: -10,
    padding: 0
  }
});
