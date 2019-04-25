import React, { Component } from 'react';
import { View, Text, ScrollView, Alert, FlatList, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { FontWeights, Theme, styles, DropDownAlertStyles } from '../../theme';
import { TermsLogoutCard } from '../../components/cards/LogoutCard';
import { SettingsList } from '../../components/cards/SettingsList';
import { APP_VERSION } from '../../config';
import { Avatar } from 'react-native-elements';
import { TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadImage } from '../../utils/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo, updateEmail, sendEmailVerification } from '../../utils/updateUserInfo';
import { Icon } from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';
import DropdownAlert from 'react-native-dropdownalert';

interface Props {
  navigation: any;
  logoutUserHandler: any;
  user: any;
}
interface State {
  isLogoutDialogDisplayed: boolean;
  editmode: any;
  name: string;
  email: string;
  phone: string;
}

class ProfileTabScreen extends Component<Props, State> {
  dropDownNotification: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      isLogoutDialogDisplayed: false,
      editmode: {
        name: false,
        email: false
      },
      name: this.props.user.displayName || '',
      email: this.props.user.email || '',
      phone: this.props.user.phoneNumber || ''
    };
  }

  keyExtractor = (item: { title: any }) => item.title;

  renderItem = ({ item }: any) => <SettingsList item={item} />;

  render() {
    console.warn('USER: ', this.props.user);
    const accountData = [
      {
        title: 'My Account',
        // icon: 'settings',
        subtitle: 'Addresses, Payments, Favourites, Referals and others.',
        onPress: () => Alert.alert('Work In Progress'),
        iconType: 'material-community',
        children: <Text>INFO</Text>
      },
      {
        title: 'Orders',
        subtitle: 'Give Your Valueable Feedback',
        onPress: () => Alert.alert('Give Feedback')
        // children: <Text>Give Feedback</Text>
      }
    ];
    console.log(this.state.editmode);
    return (
      <View style={[styles.container, { paddingTop: 20 }]}>
        <StatusBar backgroundColor={Theme.primary} translucent />
        <ScrollView contentContainerStyle={{ backgroundColor: Theme.background }}>
          <View
            style={{
              padding: 20,
              justifyContent: 'center',
              flex: 1
            }}
          >
            <Avatar
              source={{
                uri: this.props.user.photoURL
              }}
              onEditPress={async () => {
                try {
                  const response = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [1, 1]
                  });
                  if (!response.cancelled) {
                    const res = await uploadImage(response, 'profile');
                    if (res.downloadURL)
                      updateUserInfo({
                        photoURL: res.downloadURL
                      });
                  }
                } catch (error) {
                  console.warn(error);
                }
              }}
              showEditButton
              rounded
              size="large"
            />
            {/* <Button
              onPress={() => {
                this.setState({ editmode: { name: true } });
              }}
            /> */}
            <View style={{ paddingTop: 10, flex: 1 }}>
              <TextInput
                onTouchStart={() => console.log('Hello...')}
                ref={'textInput'}
                label={'Name'}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'words'}
                autoCorrect={false}
                underlineColor={'transparent'}
                theme={{
                  colors: {
                    text: Theme.text,
                    error: Theme.red,
                    disabled: Theme.text
                  }
                }}
                // disabled={!this.state.editmode.name}
                value={this.state.name}
                onChangeText={name => this.setState(prevState => ({ name, editmode: { ...prevState, name: true } }))}
                placeholder={'Name'}
                keyboardType={Platform.OS === 'ios' ? 'name-phone-pad' : 'name-phone-pad'}
                // style={styles.textInput}
                returnKeyType={'next'}
                style={{ backgroundColor: 'transparent' }}
                // placeholderTextColor={Theme.primary}
                // selectionColor={Theme.primary}
                maxLength={20}
              />
              <TextInput
                ref={'textInput'}
                label={'Email'}
                underlineColor={'transparent'}
                theme={{
                  colors: {
                    text: Theme.text,
                    error: Theme.red,
                    disabled: Theme.text
                  }
                }}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
                // disabled={!this.state.editmode.name}
                value={this.state.email}
                onChangeText={email => this.setState(prevState => ({ email, editmode: { ...prevState, email: true } }))}
                placeholder={'Email'}
                keyboardType={'email-address'}
                style={{ backgroundColor: 'transparent' }}
                returnKeyType={'next'}
                // placeholderTextColor={Theme.primary}
                // selectionColor={Theme.primary}
                maxLength={20}
              />
              {!this.props.user.emailVerified && (
                <TouchableOpacity
                  style={[
                    {
                      alignSelf: 'flex-end',
                      padding: 20,
                      marginTop: 18,
                      paddingTop: 4,
                      paddingBottom: 4,
                      borderWidth: 1,
                      borderColor: Theme.green
                    }
                  ]}
                  onPress={() => {
                    const mode = this.state.editmode;
                    this.setState({ editmode: !mode });
                    sendEmailVerification().then(() => {
                      this.dropDownNotification.alertWithType(
                        'info',
                        'Verification Email Sent',
                        'Please Click on the link'
                      );
                    });
                  }}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon size={16} name={'done'} type="MaterialIcons" color={Theme.green} />
                    <Text style={{ color: Theme.green }}>Verify</Text>
                  </View>
                </TouchableOpacity>
              )}
              <TextInput
                ref={'textInput'}
                label={'Phone Number'}
                disabled
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone, editmode: true })}
                placeholder={'Phone Number'}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                returnKeyType={'next'}
                // placeholderTextColor={Theme.primary}
                // selectionColor={Theme.primary}
                theme={{
                  colors: {
                    text: Theme.textDark,
                    error: Theme.red,
                    disabled: Theme.text
                  }
                }}
                maxLength={20}
                style={{ backgroundColor: 'transparent' }}
                // onSubmitEditing={this.getSubmitAction}
                render={(props: any) => (
                  <TextInputMask
                    {...props}
                    onChangeText={(formatted: any, extracted: any) => {
                      this.setState({ phone: extracted });
                    }}
                    mask={'[000] [000] [0000]'}
                  />
                )}
              />

              {this.state.editmode.name ||
                (this.state.editmode.email && (
                  <TouchableOpacity
                    style={[
                      {
                        alignSelf: 'flex-end',
                        padding: 20,
                        marginTop: 18,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderWidth: 1,
                        borderColor: Theme.primary
                      }
                    ]}
                    onPress={() => {
                      const mode = this.state.editmode;
                      this.setState({ editmode: !mode });
                      if (this.state.name) {
                        updateUserInfo({ displayName: this.state.name });
                      }
                      if (this.state.email) {
                        updateEmail(this.state.email);
                      }
                    }}
                  >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Icon size={16} name={'done'} type="MaterialIcons" color={Theme.primary} />
                      <Text style={{ color: Theme.primary }}>Save</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>

          <FlatList keyExtractor={this.keyExtractor} data={accountData} renderItem={this.renderItem} />

          <TermsLogoutCard />

          <Text
            style={{
              ...FontWeights.light,
              textAlign: 'center',
              color: Theme.darkgrey,
              fontSize: 18,
              margin: 8
            }}
          >
            {APP_VERSION}
          </Text>
          <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileTabScreen);
