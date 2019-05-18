import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import { baseStyle, Colors, Theme } from '../../../theme';
const EditProfileScreen = (props: any) => (
  <View style={baseStyle.flex1}>
    <HeaderBar
      leftComponent={{
        icon: 'arrow-back',
        onPress: () => {
          props.navigation.goBack();
        },
        color: Theme.text
      }}
      title={'Edit'}
    />
    <Text>Hello</Text>
  </View>
);

const mapStateToProps = (state: any) => ({
  info: state.collectionData,
  user: state.user,
  location: state.location
});

export default connect(mapStateToProps)(EditProfileScreen);
