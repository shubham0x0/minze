import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { FontWeights, Theme, statusbarMargin } from '../../theme';
import { TermsLogoutCard } from '../../components/cards/LogoutCard';
import { SettingsList } from '../../components/cards/SettingsList';
import { APP_VERSION } from '../../config';
import { Avatar, Divider, Button } from 'react-native-elements';
import { Title, Subheading } from 'react-native-paper';
import TouchableOpacityButton from '../../components/buttons/TouchableOpacityButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
  logoutUserHandler: any;
  user: any;
}
interface State {
  isLogoutDialogDisplayed: boolean;
}

class ProfileTabScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLogoutDialogDisplayed: false
    };
  }
  //   | 'material'
  //   | 'material-community'
  //   | 'simple-line-icon'
  //   | 'zocial'
  //   | 'font-awesome'
  //   | 'octicon'
  //   | 'ionicon'
  //   | 'foundation'
  //   | 'evilicon'
  //   | 'entypo'
  //   | 'antdesign'
  keyExtractor = (item: { title: any }, index: any) => item.title;

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
        title: 'FEEDBACK',
        subtitle: 'Give Your Valueable Feedback',
        onPress: () => Alert.alert('Give Feedback')
        // children: <Text>Give Feedback</Text>
      }
    ];

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ backgroundColor: Theme.background }}>
          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <Avatar
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
              }}
              showEditButton
              rounded
              size="large"
            />
            <View>
              <Title> {this.props.user.providerName && this.props.user.providerName}</Title>
              <Subheading style={{ paddingLeft: 10 }}>
                {this.props.user.phoneNumber && this.props.user.phoneNumber}
              </Subheading>
            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => {}}>
              <Text>EDIT</Text>
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
