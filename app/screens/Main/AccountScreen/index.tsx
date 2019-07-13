import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DropDownAlertStyles, styles, Colors } from '../../../theme';
import { SettingsList } from '../../../components/cards/SettingsList';
import DropdownAlert from 'react-native-dropdownalert';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import Account from '../../../components/parts/Account';
import { Header } from 'react-native-elements';
import { onPressLogoutAsync } from '../../../utils';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
  logoutUserHandler: any;
}
interface State {}

class AccountScreen extends Component<Props, State> {
  dropDownNotification: any;
  keyExtractor = (item: { title: any }) => item.title;
  renderItem = ({ item }: any) => <SettingsList item={item} />;

  render() {
    const accountData = [
      {
        title: 'My Account',
        subtitle: 'Addresses, Payments, Favourites, Referals and others.',
        children: <Account />
      },
      {
        title: 'Feedback',
        subtitle: 'Give Your Valueable Feedback',
        children: <Text>Give Feedback</Text>
      },
      {
        title: 'About',
        subtitle: 'me',
        onPress: () => {}
      },
      {
        title: 'Version',
        subtitle: '1.0.1',

        onPress: () => {}
      },
      {
        title: 'Logout',
        onPress: () => {
          onPressLogoutAsync();
        }
      }
    ];
    return (
      <View style={[styles.container]}>
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: Colors.grey,
            borderBottomColor: Colors.blackBg,
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          // leftComponent={{ icon: 'arrow-back', color: Theme.greyLight }}
          centerComponent={{ text: 'Account', style: { color: '#fff' } }}
          rightComponent={{ icon: 'more-vert', color: '#fff' }}
        />
        <FlatList keyExtractor={this.keyExtractor} data={accountData} renderItem={this.renderItem} />
        <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (this.dropDownNotification = ref)} />
      </View>
    );
  }
}

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AccountScreen);
