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

const Account: React.FC<Props> = () => {
  const context = useContext(RootContext);
  const { user, savedAddresses } = context.state;
  return (
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
      <Text style={[baseStyle.heading1, { paddingTop: 20 }]}>{user.displayName}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', paddingBottom: 10 }}>
        <MaterialIcons style={[baseStyle.heading3, { paddingRight: 6 }]} color={Theme.darkText} name="my-location" />
        {context.state.savedAddresses.length === 0 ? (
          <Text>Select Delivery Location</Text>
        ) : (
          <Text ellipsizeMode={'tail'} style={[baseStyle.heading3, {}]}>
            {context.state.savedAddresses[context.state.currentDelivery].title ||
              context.state.savedAddresses[context.state.currentDelivery].address}
          </Text>
        )}
      </View>
      <Text style={[baseStyle.heading5, {}]}>{user.phoneNumber}</Text>
    </View>
  );
};

export default Account;
