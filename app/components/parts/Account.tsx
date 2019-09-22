import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Theme, baseStyle } from '../../theme';
import { Avatar } from 'react-native-elements';
import { uploadImage } from '../../utils/profile/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo } from '../../utils/profile/updateUserInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  user: any;
  navigation: any;
  location: any;
}
interface State {
  editmode: boolean;
  name: string;
  email: string;
  phone: string;
  location: string;
}

class ProfileTabScreen extends Component<Props, State> {
  dropDownNotification: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      editmode: false,
      name: this.props.user.displayName || '',
      email: this.props.user.email || '',
      phone: this.props.user.phoneNumber || '',
      location: 'NA'
    };
    this.geocode();
  }

  geocode = async () => {
    fetch(
      `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${this.props.location.coords.latitude},${this.props.location.coords.longitude}&mode=retrieveAddresses&maxresults=1&gen=9&app_id=HxPqfmRPvPUbjtldsH8d&app_code=KcABDOVO3ziS5lQhkQhB-A`,
      {}
    )
      .then(res => res.json())
      .then(res => {
        res.Response && this.setState({ location: res.Response.View[0].Result[0].Location.Address.Label });
      })
      .catch(err => {
        this.setState({ location: err.message });
      });
  };

  render() {
    return (
      <View style={{}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
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
                // console.warn(error);
              }
            }}
            showEditButton={this.state.editmode}
          />
          <Text style={[baseStyle.heading1, { paddingTop: 20 }]}>{this.state.name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', paddingBottom: 10 }}>
            <MaterialIcons
              style={[baseStyle.heading3, { paddingRight: 6 }]}
              color={Theme.darkText}
              name="my-location"
            />
            <Text style={[baseStyle.heading3, {}]}>{this.state.location}</Text>
          </View>

          <Text style={[baseStyle.heading5, {}]}>{this.state.phone}</Text>
          <Text style={[baseStyle.heading5, {}]}>{this.state.email}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: { user: any; location: any }) => ({
  user: state.user,
  location: state.location
});

export default connect(mapStateToProps)(ProfileTabScreen);
