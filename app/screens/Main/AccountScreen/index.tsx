import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Theme, baseStyle, Layout } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

import topGenres from '../../../mockdata/ourPicks.json';
import Account from '../../../components/parts/Account';
import { handleUrl } from '../../../utils';
import { RootContext } from '../../../context';
import { ApolloContext } from 'react-apollo';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import CONFIG from '../../../config';
import { Button } from 'react-native-elements';
import AskUserModal from '../../../components/modals/AskUserModal';
import { signOutUserAsync } from '../../../utils/auth/signOutUserAsync';
import { NavigationType } from '../../../types';
interface Props {
  navigation: NavigationType;
}

const AccountScreen = (props: Props) => {
  const [scrollY] = React.useState(new Animated.Value(0));
  const [settingsTab, setSettingsTab] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const context = React.useContext(RootContext);
  const gqlContext = React.useContext(ApolloContext);

  React.useEffect(() => {
    (async () => {
      // await getLocationUpdate();
      if (!gqlContext || !gqlContext.client) {
        return;
      }
      try {
      } catch (err) {
        // console.log(err);
      }
    })();
  }, [gqlContext]);

  const accountData = [
    {
      title: 'Feedback',
      subtitle: 'Give Your Valueable Feedback',
      handleOnPress: () => {
        handleUrl('https://github.com/shubhamxy/minze/issues');
      },
      children: <Text>Give Feedback</Text>
    },
    {
      title: 'About',
      subtitle: 'Build with ❤️ by Shubham Jain <github.com/shubhamxy>',
      handleOnPress: () => {
        handleUrl('https://github.com/shubhamxy');
      }
    },
    {
      title: 'Version',
      subtitle: CONFIG.APP_VERSION,
      handleOnPress: () => {
        handleUrl('https://github.com/shubhamxy/minze');
      }
    },
    {
      title: 'Server Status',
      subtitle: context.state.network.serverStatus,
      handleOnPress: () => {
        handleUrl(CONFIG.GRAPHQL_ENDPOINT);
      }
    },
    {
      title: 'AuthToken',
      subtitle: context.state.network.authToken,
      handleOnPress: () => {
        handleUrl('https://minze-server.herokuapp.com/playground');
      }
    }
  ];

  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 2]}
        style={baseStyle.container}
      >
        <HeaderBar
          title={'Profile'}
          rightComponent={{
            icon: 'edit',
            onPress: () => {
              props.navigation.navigate('EditProfile');
            }
          }}
        />
        <View style={[{ paddingBottom: 20, justifyContent: 'center', backgroundColor: Theme.secondary }]}>
          <Account navigation={props.navigation} />
        </View>
        <>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: settingsTab ? Theme.surface : Theme.backdrop,
                height: '100%',
                justifyContent: 'center'
              }}
              onPress={() => {
                setSettingsTab(false);
              }}
            >
              <Text
                style={{
                  ...baseStyle.heading5,
                  color: settingsTab ? Theme.backdrop : Theme.surface
                }}
              >
                Your Favourites
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSettingsTab(true);
              }}
              testID="AccountSettings"
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: settingsTab ? Theme.backdrop : Theme.surface,
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  ...baseStyle.heading5,
                  color: settingsTab ? Theme.surface : Theme.backdrop
                }}
              >
                Account Settings
              </Text>
            </TouchableOpacity>
          </View>
        </>
        {settingsTab ? (
          <View style={{ padding: 12, minHeight: Layout.window.height }}>
            <FlatList
              key={1}
              contentContainerStyle={styles.containerFlatlist}
              data={accountData}
              keyExtractor={itemObj => itemObj.title.toString()}
              numColumns={1}
              renderItem={(itemObj: any) => {
                const { item } = itemObj;
                return (
                  <TouchableListItem
                    itemStyle={{ borderRadius: 0, margin: 12 }}
                    bgColor={item.surface ? item.surface : Theme.surface}
                    subtitle={item.subtitle}
                    onPress={item.handleOnPress}
                    title={item.title}
                    textColor={Theme.text}
                  />
                );
              }}
            />
            <AskUserModal toggleDialog={() => setVisible(false)} visible={visible} onSuccess={signOutUserAsync} />
            <Button
              type="clear"
              onPress={() => {
                setVisible(true);
              }}
              containerStyle={{ width: '100%' }}
              icon={{
                name: 'logout',
                type: 'antdesign',
                size: 15,
                color: Theme.lightText
              }}
              title="Logout"
              buttonStyle={{ backgroundColor: Theme.darkText }}
              titleStyle={{ ...baseStyle.heading2, color: Theme.lightText }}
            />
          </View>
        ) : (
          <View style={{ padding: 12, paddingBottom: 100, minHeight: Layout.window.height }}>
            <FlatList
              key={2}
              data={topGenres}
              keyExtractor={itemObj => itemObj.title.toString()}
              numColumns={2}
              renderItem={itemObj => {
                const { item } = itemObj;

                return <TouchableListItem itemStyle={{ margin: 12 }} bgColor={item.color} title={item.title} />;
              }}
            />
          </View>
        )}

        <Text>{__DEV__ && JSON.stringify(context, null, 4)}</Text>
      </Animated.ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {},
  searchPlaceholder: {
    alignItems: 'center',
    backgroundColor: Theme.background,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 0
  },
  searchContainer: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center'
  },
  searchPlaceholderText: {
    ...baseStyle.cursiveBold5
  },
  headerText: {
    ...baseStyle.cursiveBold5,
    color: Theme.darkText,
    paddingLeft: 36
  },
  sectionHeading: {
    ...baseStyle.cursiveBold4,
    color: Theme.darkText,
    // marginBottom: 24,
    padding: 8
    // marginLeft: 24,
    // marginTop: 16
  },
  containerFlatlist: {},
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    backgroundColor: Theme.surface
  }
});

export default AccountScreen;
