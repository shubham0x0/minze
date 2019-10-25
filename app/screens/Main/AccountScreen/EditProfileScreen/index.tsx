import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, Platform, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { baseStyle, Colors, Theme, activeOpacity } from '../../../../theme';
import { TextInput } from 'react-native-paper';
import ScrollView from '../../../../components/view/ScrollView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadImage } from '../../../../utils/profile/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo, updateEmail } from '../../../../utils/profile/updateUserInfo';

import { Icon, Avatar, Button } from 'react-native-elements';
import { RootContext } from '../../../../context';
interface UserInfo {
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
  providerId: string;
  uid: string;
  emailVerified: boolean;
}

interface Props {
  info: any;
  navigation: any;
}
const EditProfileScreen = (props: Props) => {
  const context = useContext(RootContext);
  const { user } = context.state;
  const [displayName, setDisplayName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setDisabled(false);
  }, [displayName, email, photoURL, phoneNumber]);

  const handleOnPress = async () => {
    setLoading(true);
    try {
      if (displayName !== user.displayName && displayName) {
        await updateUserInfo({ displayName });
      }
      if (photoURL !== user.photoURL && photoURL) {
        await updateUserInfo({ photoURL });
      }
      if (email !== user.email && email) {
        await updateEmail(email);
      }
    } catch (err) {
      // console.warn('warning::' + err);
    }
    setTimeout(() => {
      setLoading(false);
      setDisabled(true);
    }, 300);
  };
  return (
    <ScrollView
      headerProps={{
        leftComponent: {
          icon: 'arrow-back',
          onPress: () => {
            props.navigation.goBack();
          },
          color: Theme.text
        },
        title: 'Edit'
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: user.photoURL
          }}
          onEditPress={async () => {
            try {
              const response = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1]
              });
              if (!response.cancelled) {
                const res = await uploadImage(response, 'profile');
                setPhotoURL(res.downloadURL);
              }
            } catch (error) {
              // console.warn(error);
            }
          }}
          showEditButton
        />
      </View>
      <View style={{ flex: 1, padding: 20, justifyContent: 'flex-start', alignContent: 'center' }}>
        <TextInput
          label={'Name'}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'words'}
          autoCorrect={false}
          underlineColor={'transparent'}
          theme={{
            colors: {
              text: Theme.text,
              error: Colors.red,
              disabled: Theme.text
            }
          }}
          value={displayName}
          onChangeText={setDisplayName}
          placeholder={'Name'}
          keyboardType={Platform.OS === 'ios' ? 'name-phone-pad' : 'name-phone-pad'}
          returnKeyType={'next'}
          style={{ backgroundColor: 'transparent' }}
          maxLength={20}
        />
        <TextInput
          label={'Email'}
          underlineColor={'transparent'}
          theme={{
            colors: {
              text: Theme.text,
              error: Colors.red,
              disabled: Theme.text
            }
          }}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
          keyboardType={'email-address'}
          style={{ backgroundColor: 'transparent' }}
          returnKeyType={'next'}
          maxLength={20}
        />
        {!user.emailVerified && (
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
            onPress={() => {}}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon size={16} name={'done'} type="MaterialIcons" color={Colors.green} />
              <Text style={{ color: Colors.green }}>Verify</Text>
            </View>
          </TouchableOpacity>
        )}

        <TextInput
          label={'Phone Number'}
          disabled
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={'Phone Number'}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          returnKeyType={'next'}
          theme={{
            colors: {
              text: Theme.darkText,
              error: Colors.red,
              disabled: Theme.text
            }
          }}
          maxLength={20}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
      <Button
        type={'solid'}
        title="Save"
        loading={loading}
        onPress={handleOnPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
        containerStyle={{ borderRadius: 0, marginLeft: 20, marginRight: 20 }}
        buttonStyle={{ backgroundColor: Theme.darkText }}
        titleStyle={{ ...baseStyle.heading2, color: Theme.secondary }}
      />
    </ScrollView>
  );
};
const mapStateToProps = (state: any) => ({
  info: state.collectionData
});

export default connect(mapStateToProps)(EditProfileScreen);
