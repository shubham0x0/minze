import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Theme, baseStyle } from '../../theme';
import { Avatar } from 'react-native-elements';
import { uploadImage } from '../../utils/profile/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo } from '../../utils/profile/updateUserInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootContext } from '../../context';

interface Props {
  navigation: any;
}

const Account: React.FC<Props> = (props: Props) => {
  const context = useContext(RootContext);
  const { user } = context.state;
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Avatar
        size="large"
        rounded
        source={{
          uri: user.photoURL || 'https://picsum.photos/id/1/1024/1024'
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
      />
      {user.displayName ? <Text style={[baseStyle.heading1, { paddingTop: 20 }]}>{user.displayName}</Text> : <View />}
      {user.phoneNumber ? <Text style={[baseStyle.heading5, { paddingTop: 10 }]}>{user.phoneNumber}</Text> : <View />}
    </View>
  );
};

export default Account;
