import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DropDownAlertStyles, styles, Colors } from '../../../theme';
import { SettingsList } from '../../../components/cards/SettingsList';
import DropdownAlert from 'react-native-dropdownalert';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import Account from '../../../components/parts/Account';
import { Header } from 'react-native-elements';
import { onPressLogoutAsync } from '../../../utils';
import { RootContext } from '../../../context';
import { ApolloContext } from 'react-apollo';
import { FETCH_USER } from '../../../graphql/queries';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
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
    const response = await gqlContext.client.query({ query: FETCH_USER });
    setprofile(response.data.me);
  };
  fetchData();
  React.useEffect(() => {
    if (firstupdate.current) {
      firstupdate.current = false;
      return;
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
      <FlatList keyExtractor={keyExtractor} data={accountData} renderItem={renderItem} />
      <Text style={{ color: '#fff' }}>{JSON.stringify(profile)}</Text>
      <DropdownAlert {...DropDownAlertStyles} ref={(ref: any) => (dropDownNotification = ref)} />
    </View>
  );
};

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AccountScreen);
