import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../../theme';
import { Avatar, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadImage } from '../../utils/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo, updateEmail, sendEmailVerification } from '../../utils/updateUserInfo';

import TextInputMask from 'react-native-text-input-mask';

interface Props {
  user: any;
}
interface State {
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
      editmode: {
        name: false,
        email: false
      },
      name: this.props.user.displayName || '',
      email: this.props.user.email || '',
      phone: this.props.user.phoneNumber || ''
    };
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
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
                text: Colors.text,
                error: Colors.red,
                disabled: Colors.text
              }
            }}
            value={this.state.name}
            onChangeText={name => this.setState(prevState => ({ name, editmode: { ...prevState, name: true } }))}
            placeholder={'Name'}
            keyboardType={Platform.OS === 'ios' ? 'name-phone-pad' : 'name-phone-pad'}
            returnKeyType={'next'}
            style={{ backgroundColor: 'transparent' }}
            maxLength={20}
          />
          <TextInput
            ref={'textInput'}
            label={'Email'}
            underlineColor={'transparent'}
            theme={{
              colors: {
                text: Colors.text,
                error: Colors.red,
                disabled: Colors.text
              }
            }}
            underlineColorAndroid={'transparent'}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState(prevState => ({ email, editmode: { ...prevState, email: true } }))}
            placeholder={'Email'}
            keyboardType={'email-address'}
            style={{ backgroundColor: 'transparent' }}
            returnKeyType={'next'}
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
                  borderColor: Colors.green
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
                <Icon size={16} name={'done'} type="MaterialIcons" color={Colors.green} />
                <Text style={{ color: Colors.green }}>Verify</Text>
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
            theme={{
              colors: {
                text: Colors.textDark,
                error: Colors.red,
                disabled: Colors.text
              }
            }}
            maxLength={20}
            style={{ backgroundColor: 'transparent' }}
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
                    borderColor: Colors.primary
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
                  <Icon size={16} name={'done'} type="MaterialIcons" color={Colors.primary} />
                  <Text style={{ color: Colors.primary }}>Save</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View style={{ marginLeft: 10 }}>
          <Avatar
            size="large"
            rounded
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
                  if (res.downloadURL) {
                    updateUserInfo({
                      photoURL: res.downloadURL
                    });
                  }
                }
              } catch (error) {
                console.warn(error);
              }
            }}
            showEditButton
          />
        </View>
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
