import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Layout, baseStyle } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

import topGenres from '../../../mockdata/ourPicks.json';
import TouchIcon from '../../../components/TouchIcon';
import SvgSearch from '../../../components/icons/Svg.Search';
import { getCollections } from '../../../utils/getData';

const ExploreScreen: React.FC<any> = (props: any) => {
  const scrollY = new Animated.Value(0);
  const searchStart = Layout.window.width - 48;
  const searchEnd = Layout.window.width - 88;

  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={baseStyle.container}
      >
        <View style={[{ justifyContent: 'flex-start', backgroundColor: Theme.secondary }]}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => null} style={{ flexDirection: 'row' }}>
            <FontAwesome style={[styles.sectionHeading]} color={Theme.darkText} name="location-arrow" />
            <Text style={[styles.sectionHeading]}>Your Location</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
            <Text numberOfLines={3} ellipsizeMode={'tail'} style={[styles.headerText, { width: 140 }]}>
              98, 3rd Floor, Pocket21, Sector 24, Rohini
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerSearchBar}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.searchPlaceholder}>
              <View style={baseStyle.mR1}>
                <SvgSearch size={16} fill={Theme.darkText} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Search');
                }}
                style={styles.searchContainer}
              >
                <Text style={styles.searchPlaceholderText}> Search for restaurants, dishes, and more... </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Text style={styles.sectionHeading}>Our picks</Text>
        <FlatList
          contentContainerStyle={styles.containerFlatlist}
          data={topGenres}
          keyExtractor={itemObj => itemObj.id.toString()}
          numColumns={3}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <TouchableListItem
                itemStyle={{
                  margin: 6,
                  paddingLeft: 12
                }}
                bgColor={item.color}
                onPress={() => null}
                title={item.title}
              />
            );
          }}
        />

        <Text style={styles.sectionHeading}>Browse Collections</Text>
        <FlatList
          contentContainerStyle={styles.containerFlatlist}
          data={getCollections().collections}
          keyExtractor={itemObj => itemObj.collection.collection_id.toString()}
          numColumns={2}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <ImageBackground
                style={{
                  flex: 1,
                  margin: 24,
                  marginBottom: 12,
                  marginTop: 12
                }}
                blurRadius={1}
                source={{ uri: item.collection.image_url || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
              >
                <TouchableListItem
                  bgColor={'#cccccc51'}
                  onPress={() => null}
                  title={item.collection.title}
                  textColor={Theme.text}
                  itemStyle={{ margin: 0, borderRadius: 0, paddingLeft: 12 }}
                />
              </ImageBackground>
            );
          }}
        />
      </Animated.ScrollView>
      <View style={styles.iconRight}>
        <TouchIcon icon={<FontAwesome color={Theme.darkText} name="filter" />} onPress={() => null} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {
    ...baseStyle.pH3,
    backgroundColor: Theme.secondary,
    paddingBottom: 10,
    paddingTop: Layout.iPhoneX ? 64 : 10
  },
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
    ...baseStyle.heading5
  },
  headerText: {
    ...baseStyle.heading4,
    color: Theme.darkText,
    paddingLeft: 36
  },
  sectionHeading: {
    ...baseStyle.heading5,
    color: Theme.darkText,
    padding: 8
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
  }
});

export default ExploreScreen;
