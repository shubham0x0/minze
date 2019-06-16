import React from 'react';
import { Alert, Animated, Image, StyleSheet, Switch, Text, View, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// components
import LinearGradient from './gradients/LinearGradient';
import TouchableIcon from './touchable/TouchIcon';
import TouchText from './touchable/TouchText';

import { globalStyle, Theme, styles, Layout, Fonts } from '../theme';
import { NavigationScreenProp, NavigationRoute, NavigationEventSubscription } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}

interface State {
  ExpandedList: any;
  downloaded: boolean;
  scrollY: any;
  song: any;
  title: any;
}

class ExpandedList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ExpandedList: null,
      downloaded: false,
      scrollY: new Animated.Value(0),
      song: null,
      title: null
    };

    this.toggleDownloaded = this.toggleDownloaded.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }
  static defaultProps = {};

  navListenerOnFocus!: NavigationEventSubscription;
  navListenerOnBlur!: NavigationEventSubscription;

  componentDidMount() {
    // TODO :: tintColor deprecated
    console.disableYellowBox = true;

    this.setState({
      ExpandedList: 'YOYO' || null,
      song: 'ASDSAD',
      title: 'asdasdsad'
    });

    // @ref: https://reactnavigation.org/docs/en/status-bar.html
    this.navListenerOnFocus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(Theme.blue);
    });
    this.navListenerOnBlur = this.props.navigation.addListener('didBlur', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(Theme.statusbar);
    });
  }

  componentWillUnmount() {
    this.navListenerOnFocus.remove();
    this.navListenerOnBlur.remove();
  }

  toggleDownloaded(val: boolean) {
    // warn on switch off from kids settings...
    if (val === false) {
      Alert.alert(
        'Remove from Downloads?',
        "You won't be able to play this offline.",
        [
          { text: 'Cancel' },
          {
            onPress: () => {
              this.setState({
                downloaded: false
              });
            },
            text: 'Remove'
          }
        ],
        { cancelable: false }
      );
    } else {
      this.setState({
        downloaded: val
      });
    }
  }

  changeSong(songData: { title: any }) {
    this.setState({
      song: songData.title
    });
  }

  render() {
    const { navigation } = this.props;
    const { ExpandedList, downloaded, scrollY, title } = this.state;

    // ExpandedList data not set?
    if (ExpandedList === null) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{ color: Theme.white }}>{`ExpandedList: ${title}`}</Text>
        </View>
      );
    }

    const opacityHeading = scrollY.interpolate({
      inputRange: [230, 280],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    const opacityShuffle = scrollY.interpolate({
      inputRange: [40, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor={Theme.blue} />
        <View style={localstyles.containerHeader}>
          <Animated.View style={[localstyles.headerLinear, { opacity: opacityHeading }]}>
            <LinearGradient fill={Theme.blue} height={89} />
          </Animated.View>
          <View style={localstyles.header}>
            <TouchableIcon
              icon={<Feather color={Theme.white} name="chevron-left" />}
              onPress={() => navigation.goBack(null)}
            />
            <Animated.View style={{ opacity: opacityShuffle }}>
              <Text style={localstyles.headerTitle}>Hello, Testing</Text>
            </Animated.View>
            <TouchableIcon icon={<Feather color={Theme.white} name="more-horizontal" />} onPress={() => null} />
          </View>
        </View>

        <View style={localstyles.containerFixed}>
          <View style={localstyles.containerLinear}>
            <LinearGradient fill={Theme.blue} />
          </View>
          <View style={localstyles.containerImage}>
            <Image source={{ uri: 'https://picsum.photos/600/400' }} style={styles.image} />
          </View>
          <Text ellipsizeMode="tail" numberOfLines={1} style={localstyles.title}>
            {ExpandedList.title}
          </Text>
          <Text style={localstyles.ExpandedListInfo}>{`ExpandedList by ${'Hello gucci gang'} · ${
            ExpandedList.released
          }`}</Text>
        </View>

        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          style={localstyles.containerScroll}
        >
          <View style={localstyles.containerSticky}>
            <Animated.View style={[localstyles.containerStickyLinear, { opacity: opacityShuffle }]}>
              <LinearGradient fill={Theme.black20} height={50} />
            </Animated.View>
            <View style={localstyles.containerShuffle}>
              <TouchText
                onPress={() => null}
                style={localstyles.btn}
                styleText={localstyles.btnText}
                text="Shuffle Play"
              />
            </View>
          </View>
          <View style={localstyles.containerSongs}>
            <View style={localstyles.row}>
              <Text style={{ fontFamily: Fonts.helvitica, color: Theme.greyLight }}> hello</Text>
              <Switch
                tintColor={Theme.greySwitchBorder}
                onValueChange={val => this.toggleDownloaded(val)}
                value={downloaded}
              />
            </View>
          </View>
          <View style={globalStyle.spacer128} />
        </Animated.ScrollView>
      </View>
    );
  }
}

const localstyles = StyleSheet.create({
  ExpandedListInfo: {
    color: Theme.greyInactive,
    fontFamily: Fonts.monospace,
    fontSize: 12,
    marginBottom: 48
  },
  btn: {
    backgroundColor: Theme.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    color: Theme.white,
    fontFamily: Fonts.helvitica,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  containerFixed: {
    alignItems: 'center',
    paddingTop: Layout.iPhoneX ? 94 : 50,
    position: 'absolute',
    width: '100%'
  },
  containerHeader: {
    height: 100,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  containerImage: {
    shadowColor: Theme.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6
  },
  containerLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  containerScroll: {
    paddingTop: 89
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: Theme.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: Theme.background,
    minHeight: 540
  },
  containerSticky: {
    marginTop: Layout.iPhoneX ? 238 : 194
  },
  containerStickyLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  downloadText: {
    color: Theme.white,
    fontFamily: Fonts.donButique,
    fontSize: 18
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Layout.iPhoneX ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerLinear: {
    height: 200,
    width: '100%'
  },
  headerTitle: {
    color: Theme.white,
    fontFamily: Fonts.bold,
    fontSize: 16,
    marginTop: 2,
    paddingHorizontal: 8,
    textAlign: 'center',
    width: Layout.window.width - 100
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  title: {
    color: Theme.white,
    fontFamily: Fonts.bold,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  }
});

export default ExpandedList;
