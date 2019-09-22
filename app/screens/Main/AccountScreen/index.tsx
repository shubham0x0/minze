import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Theme, baseStyle, Layout } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

import topGenres from '../../../mockdata/ourPicks.json';
import { connect } from 'react-redux';
import Account from '../../../components/parts/Account';
import { onPressLogoutAsync, handleUrl } from '../../../utils';
import { RootContext } from '../../../context';
import { ApolloContext } from 'react-apollo';
import { FETCH_USER } from '../../../graphql/queries';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import { GRAPHQL_ENDPOINT } from '../../../config';
import { getLocationUpdate } from '../../../utils/getLocation';

const AccountScreen = (props: any) => {
  const [scrollY] = React.useState(new Animated.Value(0));
  const [settingsTab, setSettingsTab] = React.useState(false);
  const context = React.useContext(RootContext);
  const gqlContext = React.useContext(ApolloContext);
  const [profile, setprofile] = React.useState('');
  const firstupdate = React.useRef(true);

  React.useEffect(() => {
    (async () => {
      await getLocationUpdate();
      if (!gqlContext || !gqlContext.client) return;
      try {
        const response = await gqlContext.client.query({ query: FETCH_USER });
        setprofile(response.data.me);
      } catch (err) {
        // console.log(err);
      }
    })();
  }, [gqlContext]);
  React.useEffect(() => {
    if (firstupdate.current) {
      firstupdate.current = false;
    }
  }, []);

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
      subtitle: '1.0.1',
      handleOnPress: () => {
        handleUrl('https://github.com/shubhamxy/minze');
      }
    },
    {
      title: 'Server Status',
      subtitle: context.state.network.serverStatus,
      handleOnPress: () => {
        handleUrl(GRAPHQL_ENDPOINT);
      }
    },
    {
      title: 'AuthToken',
      subtitle: context.state.network.authToken,
      handleOnPress: () => {
        handleUrl('https://minze-server.herokuapp.com/playground');
      }
    },
    {
      title: 'Logout',
      handleOnPress: async () => {
        await onPressLogoutAsync();
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
        <View>
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
        </View>
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
            <Text style={{ color: Theme.text }}>{JSON.stringify(profile, null, 4)}</Text>
          </View>
        ) : (
          <View style={{ padding: 12, minHeight: Layout.window.height }}>
            <FlatList
              key={2}
              contentContainerStyle={styles.containerFlatlist}
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
  iconRight: {
    alignItems: 'center',
    height: 14,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 20,
    width: 24
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: '100%',
    backgroundColor: Theme.surface
  }
});

const mapStateToProps = (state: { user: any }) => ({
  user: state.user
});

export default connect(mapStateToProps)(AccountScreen);
