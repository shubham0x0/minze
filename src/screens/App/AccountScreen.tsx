import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { FontWeights, Theme } from '../../theme';
import { TermsLogoutCard } from '../../components/cards/LogoutCard';
import { SettingsList } from '../../components/cards/SettingsList';
import { APP_VERSION } from '../../config';
import { Avatar, Input } from 'react-native-elements';
import { Title, Subheading } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadImage } from '../../utils/uploadPhoto';
import * as ImagePicker from 'expo-image-picker';
import { updateUserInfo, updateEmail } from '../../utils/updateUserInfo';
import MapComponent from '../../components/map/MapComponent';

interface Props {
  navigation: any;
  logoutUserHandler: any;
  user: any;
}
interface State {
  isLogoutDialogDisplayed: boolean;
  editmode: boolean;
  name: string;
  email: string;
}

class ProfileTabScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLogoutDialogDisplayed: false,
      editmode: false,
      name: this.props.user.displayName || '',
      email: this.props.user.email || ''
    };
  }

  keyExtractor = (item: { title: any }) => item.title;

  renderItem = ({ item }: any) => <SettingsList item={item} />;

  render() {
    const accountData = [
      {
        title: 'MY ACCOUNT',
        // icon: 'settings',
        subtitle: 'Addresses, Payments, Favourites, Referals and others.',
        onPress: () => Alert.alert('Work In Progress'),
        iconType: 'material-community',
        children: <Text>INFO</Text>
      },
      {
        title: 'ORDERS',
        subtitle: 'Give Your Valueable Feedback',
        onPress: () => Alert.alert('Give Feedback')
        // children: <Text>Give Feedback</Text>
      }
    ];

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ backgroundColor: Theme.background }}>
          {this.state.editmode && (
            <View style={{ paddingTop: 20 }}>
              <Input
                placeholder="Name"
                autoFocus
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
              {/* <Input
                placeholder="Email"
                // autoFocus
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              /> */}
            </View>
          )}
          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
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
            {/* <UploadAvatar /> */}

            <View>
              <Title> {this.props.user.displayName && this.props.user.displayName}</Title>
              <Subheading style={{ paddingLeft: 6 }}>
                {this.props.user.phoneNumber && this.props.user.phoneNumber}
              </Subheading>
              <Subheading style={{ paddingLeft: 6 }}>{this.props.user.email && this.props.user.email}</Subheading>
            </View>

            <TouchableOpacity
              style={{ alignItems: 'flex-end' }}
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
              <Text>{this.state.editmode ? 'Done' : 'Edit'}</Text>
            </TouchableOpacity>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background
  }
});

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileTabScreen);
