import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { DropDownAlertStyles, styles, Theme } from '../../../theme';
import { SettingsList } from '../../../components/cards/SettingsList';
import DropdownAlert from 'react-native-dropdownalert';
import Account from '../../../components/parts/Account';
import { onPressLogoutAsync } from '../../../utils';
import { RootContext } from '../../../context';
import { ApolloContext } from 'react-apollo';
import { FETCH_USER } from '../../../graphql/queries';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import { NavigationType } from '../../../types';

interface Props {
  navigation: NavigationType;
  logoutUserHandler: any;
}

const AccountScreen = (props: Props) => {
  const context = React.useContext(RootContext);
  const gqlContext = React.useContext(ApolloContext);
  const [profile, setprofile] = React.useState('');
  const keyExtractor = (item: { title: any }) => item.title;
  const renderItem = ({ item }: any) => <SettingsList item={item} />;
  const firstupdate = React.useRef(true);
  const fetchData = async () => {
    if (!gqlContext || !gqlContext.client) return;
    try {
      const response = await gqlContext.client.query({ query: FETCH_USER });
      setprofile(response.data.me);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [fetchData, gqlContext]);
  React.useEffect(() => {
    if (firstupdate.current) {
      firstupdate.current = false;
    }
  }, []);
  // @ts-ignore
  let dropDownNotification;
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
      title: 'Server Status',
      subtitle: context.state.network.serverStatus,
      onPress: () => {}
    },
    {
      title: 'AuthToken',
      subtitle: context.state.network.authToken,
      onPress: () => {}
    },
    {
      title: 'Logout',
      onPress: async () => {
        await onPressLogoutAsync();
      }
    }
  ];
  return (
    <View style={[styles.container]}>
      <HeaderBar title={'Account'} />
      <FlatList keyExtractor={keyExtractor} data={accountData} renderItem={renderItem} />
      <Text style={{ color: Theme.text }}>{JSON.stringify(profile, null, 4)}</Text>
      <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (dropDownNotification = ref)} />
    </View>
  );
};

const mapStateToProps = (state: { user: any }) => ({
  user: state.user
});

export default connect(mapStateToProps)(AccountScreen);
