import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { baseStyle, Colors, Theme } from '../../../../theme';
import { TextInput } from 'react-native-paper';
import ScrollView from '../../../../components/view/ScrollView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadImage } from '../../../../utils/profile/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo, updateEmail } from '../../../../utils/profile/updateUserInfo';

import TextInputMask from 'react-native-text-input-mask';
import { Icon, Avatar, Button } from 'react-native-elements';
type UserInfo = {
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
  providerId: string;
  uid: string;
  emailVerified: boolean;
};

interface Props {
  info: any;
  user: UserInfo;
  location: any;
  navigation: any;
}
const EditProfileScreen = (props: Props) => {
  const [name, setName] = useState(props.user.displayName);
  const [photoURL] = useState(props.user.photoURL);
  const [phone, setPhone] = useState(props.user.phoneNumber);
  const [email, setEmail] = useState(props.user.email);
  const [save, setSave] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setSave(true);
  }, [name, email, photoURL, phone]);

  const handleSave = async () => {
    try {
      if (name !== props.user.displayName && name) await updateUserInfo({ displayName: name });
      if (photoURL !== props.user.photoURL && photoURL) await updateUserInfo({ photoURL });
      if (email !== props.user.email && email) await updateEmail(email);
    } catch (err) {
      console.warn(err);
    }
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
            uri: props.user.photoURL
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
          value={name}
          onChangeText={setName}
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
        {!props.user.emailVerified && (
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
          value={phone}
          onChangeText={setPhone}
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
          render={(props: any) => (
            <TextInputMask
              {...props}
              onChangeText={(formatted: any, extracted: any) => {
                setPhone(extracted);
              }}
              mask={'[000] [000] [0000]'}
            />
          )}
        />
      </View>
      <Button
        title="save"
        onPress={handleSave}
        disabled={!save}
        buttonStyle={{ backgroundColor: Theme.darkText, borderRadius: 0, marginLeft: 20, marginRight: 20 }}
        titleStyle={{ ...baseStyle.heading2, color: Theme.secondary }}
      />
    </ScrollView>
  );
};
const mapStateToProps = (state: any) => ({
  info: state.collectionData,
  user: state.user,
  location: state.location
});

export default connect(mapStateToProps)(EditProfileScreen);
