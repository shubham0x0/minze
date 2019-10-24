import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import { FontWeights, Theme, Colors, DropDownAlertStyles, activeOpacity, baseStyle, Layout } from '../../theme';
import { TextInput } from 'react-native-paper';
import { NavigationType } from '../../types';
import { Button } from 'react-native-elements';

interface Props {
  navigation: NavigationType;
}

interface State {
  spinner: boolean;
  phoneNumber: string;
  country: {
    countryCode: CountryCode;
    callingCode: string;
  };
}

class PhoneAuthScreen extends Component<Props, State> {
  dropDownNotification: any;
  state: State = {
    spinner: false,
    phoneNumber: __DEV__ ? '1234567890' : '',
    country: {
      countryCode: 'IN',
      callingCode: '91'
    }
  };
  static navigationOptions = {
    header: null
  };

  handleSubmitAction = () => {
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

  handleChangeCountry = (country: any) => {
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
      <Text testID="submitTerms" style={styles.disclaimerText}>
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
    return (
      <CountryPicker
        // closeable
        // filterable
        // animationType={AnimationType.SLIDE}
        // autoFocusFilter={false}
        onSelect={this.handleChangeCountry}
        countryCode={this.state.country.countryCode}
        translation={'common'}
      />
    );
  };

  renderCallingCode = () => (
    <View style={styles.callingCodeView}>
      <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>What's your Phone Number ?</Text>
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
              // ref={'textInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              value={this.state.phoneNumber}
              placeholder={'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={styles.textInput}
              textContentType="telephoneNumber"
              returnKeyType={'next'}
              autoFocus={true}
              placeholderTextColor={Theme.primary}
              selectionColor={Theme.primary}
              maxLength={20}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              onSubmitEditing={this.handleSubmitAction}
            />
          </View>
          <Button
            testID="submitButton"
            onPress={this.handleSubmitAction}
            title={'Submit'}
            type={'solid'}
            loading={this.state.spinner}
            activeOpacity={activeOpacity}
            containerStyle={{ marginTop: Layout.window.height / 3, borderRadius: 0, marginLeft: 20, marginRight: 20 }}
            buttonStyle={{ backgroundColor: Theme.darkText }}
            titleStyle={{ ...baseStyle.heading2, color: Theme.secondary }}
          />
          {this.renderFooter()}
        </View>
        <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
      </View>
    );
  }
}

export default PhoneAuthScreen;

const styles = StyleSheet.create({
  button: {
    // right: 0,
    // height: 45,
    marginTop: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.greyLight,
    fontSize: 26,
    ...FontWeights.light
  },
  callingCodeText: {
    color: Theme.primary,
    fontSize: 26,
    paddingHorizontal: 10,
    ...FontWeights.medium
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: { backgroundColor: Theme.background, flex: 1 },
  disclaimerText: {
    // marginTop: 30,
    fontSize: 12,
    color: Theme.text
    // ...FontWeights.light
  },
  header: {
    color: Theme.darkText,
    fontSize: 22,
    marginTop: 60,
    margin: 20,
    textAlign: 'center',
    ...FontWeights.light
  },
  textInput: {
    color: Theme.primary,
    flex: 1,
    padding: 4,
    marginTop: 12,
    fontSize: 26,
    height: 40,
    backgroundColor: Theme.background
  }
});
