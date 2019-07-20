import React from 'react';
import { Animated, Image, StyleSheet, Switch, Text, View, ImageBackground } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, Fonts, globalStyle, Layout, styles } from '../../theme';
import { NavigationType } from '../../types';
// components
import LinearGradient from '../gradients/LinearGradient';
import TouchableIcon from '../touchable/TouchIcon';
import TouchText from '../touchable/TouchText';
import Carousel from 'react-native-snap-carousel';
import { getCollections } from '../../utils/getData';
import { Title, Paragraph } from 'react-native-paper';

interface Props {
  navigation: NavigationType;
  fixedContainer?: any;
  stickyContainer?: any;
  mainContainer?: any;
  children?: React.ReactChild;
}
const Header = (props: { navigation: NavigationType; opacityHeader: any }) => (
  <View style={localstyles.header}>
    <TouchableIcon
      icon={<Feather color={Colors.white} size={10} name="chevron-left" />}
      onPress={() => props.navigation.goBack(null)}
    />
    <Animated.View style={{ opacity: props.opacityHeader }}>
      <Text style={localstyles.headerTitle}>Hello, Testing</Text>
    </Animated.View>
    <TouchableIcon icon={<Feather color={Colors.white} size={10} name="more-vertical" />} onPress={() => null} />
  </View>
);

const StickyContainer = (props: any) => (
  <React.Fragment>
    {/* <Animated.View style={[localstyles.containerStickyLinear, { opacity: props.opacityHeader }]}>
      <LinearGradient fill={Colors.grey} height={80} />
    </Animated.View> */}
    <View style={[localstyles.containerPinned, { backgroundColor: '#cccccc1f' }]}>
      <Text>77 Cents</Text>
    </View>
  </React.Fragment>
);

const MainContainerRows = (props: any) => (
  <React.Fragment>
    <Animated.View style={[localstyles.containerStickyLinear, { opacity: props.opacityHeader }]}>
      <LinearGradient fill={Colors.background} height={80} />
    </Animated.View>
    <Text style={{ fontFamily: Fonts.helvitica, color: Colors.greyLight }}> hello, World2</Text>
    <Switch
      trackColor={{ true: Colors.greySwitchBorder, false: Colors.primary }}
      onValueChange={val => {}}
      value={props.downloaded}
    />
  </React.Fragment>
);
const renderItem = ({ item }: any) => {
  const { title, description, image_url } = item.collection;
  return (
    <View>
      <ImageBackground style={{ height: 160, width: 200 }} source={{ uri: image_url }} />
      <View style={{ backgroundColor: '#ffffff07', flex: 1, flexWrap: 'wrap' }}>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </View>
    </View>
  );
};
const FixedContainer = (props: any) => (
  <React.Fragment>
    <View style={localstyles.containerLinear}>
      <LinearGradient fill={Colors.red} />
    </View>
    {/* <View style={localstyles.containerImage}> */}
    <Carousel
      autoplay
      loop
      autoplayInterval={10000}
      autoplayDelay={10000}
      ref={(c: any) => {
        // this.carousel = c;
      }}
      data={getCollections().collections}
      renderItem={renderItem}
      sliderWidth={Layout.window.width}
      itemWidth={200}
    />
    {/* </View> */}
    <Text ellipsizeMode="tail" numberOfLines={1} style={localstyles.title}>
      {'some'}
    </Text>
    <Text style={localstyles.expandedListInfo}>{`Expanded List`}</Text>
  </React.Fragment>
);

const ExpandedList: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const scrollY = new Animated.Value(0);

  React.useEffect(() => {}, []);
  // TODO ::  deprecated
  console.disableYellowBox = true;

  const opacityHeading = scrollY.interpolate({
    inputRange: [200, 260],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const opacityHeader = scrollY.interpolate({
    inputRange: [10, 160],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <View style={localstyles.containerHeader}>
        <Animated.View style={[localstyles.headerLinear, { opacity: opacityHeading }]}>
          {/* <LinearGradient fill={Colors.blue} height={80} /> */}
          <View style={{ backgroundColor: Colors.grey, height: 60 }} />
        </Animated.View>
        <Header navigation={navigation} opacityHeader={opacityHeader} />
      </View>

      <View style={localstyles.fixedContainer}>
        <FixedContainer {...props} />
        {props.fixedContainer}
      </View>

      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={localstyles.containerScroll}
      >
        {/* <View style={localstyles.containerSticky}>
          <StickyContainer {...props} />
          {props.stickyContainer}
        </View> */}
        <MainContainer {...props} />
        <View style={globalStyle.spacer128} />
      </Animated.ScrollView>
    </View>
  );
};
const MainContainer = (props: any) => (
  <React.Fragment>
    {/* <Animated.View style={[{ width: '100%', opacity: props.opacityHeading }]}> */}
    {/* <LinearGradient fill={Colors.background} height={20} /> */}
    {/* </Animated.View> */}
    <View style={localstyles.mainContainer}>
      {/* <View style={localstyles.row}>
        <MainContainerRows {...props} />
      </View> */}
      {props.children}
    </View>
  </React.Fragment>
);

const localstyles = StyleSheet.create({
  expandedListInfo: {
    color: Colors.greyInactive,
    fontFamily: Fonts.monospace,
    fontSize: 12
  },
  btn: {
    backgroundColor: Colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    color: Colors.white,
    fontFamily: Fonts.helvitica,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  fixedContainer: {
    alignItems: 'center',
    paddingTop: Layout.iPhoneX ? 94 : 60,
    position: 'absolute',
    width: '100%'
  },
  containerHeader: {
    height: 60,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  },
  containerImage: {
    shadowColor: Colors.black,
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
    paddingTop: 60
  },
  containerPinned: {
    alignItems: 'center',
    height: 20
    // paddingTop: 15,
    // paddingBottom: 15,
    // shadowColor: Colors.background,
    // shadowOffset: { height: -10, width: 0 },
    // shadowOpacity: 0.2,
    // shadowRadius: 20
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black20,
    minHeight: 720,
    width: '100%'
  },
  containerSticky: {
    marginTop: Layout.iPhoneX ? 218 : 254
  },
  containerStickyLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  downloadText: {
    color: Colors.white,
    fontFamily: Fonts.donButique,
    fontSize: 18
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: Layout.iPhoneX ? 28 : 15,
    paddingBottom: Layout.iPhoneX ? 0 : 15,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerLinear: {
    height: 80,
    width: '100%'
  },
  headerTitle: {
    color: Colors.white,
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
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  }
});

export default ExpandedList;
