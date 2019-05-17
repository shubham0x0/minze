import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Layout, globalStyle } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

import topGenres from '../mockdata/searchTopGenres.json';
import TouchIcon from '../../../components/TouchIcon';
import SvgSearch from '../../../components/icons/Svg.Search';
import { getCollections } from '../../../utils/getData';

class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // search start (24 horizontal padding )
    const searchStart = Layout.window.width - 48;

    this.state = {
      scrollY: new Animated.Value(0),
      searchStart,
      searchEnd: searchStart - 40
    };
  }

  render() {
    const { scrollY, searchStart, searchEnd } = this.state;

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
          style={globalStyle.container}
        >
          <View style={[{ justifyContent: 'flex-start', backgroundColor: Theme.secondary }]}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => null} style={{ flexDirection: 'row' }}>
              <FontAwesome style={[styles.sectionHeading]} color={Theme.darkText} name="location-arrow" />
              <Text style={[styles.sectionHeading]}>Your Location</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
              <Text style={[styles.headerText]}>98, 3rd Floor, Pocket21</Text>
              <Text style={[styles.headerText]}>Sector 24, Rohini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.searchPlaceholder}>
                <View style={globalStyle.mR1}>
                  <SvgSearch size={16} fill={Theme.darkText} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Search');
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
            numColumns={2}
            renderItem={itemObj => {
              const { item } = itemObj;

              return <TouchableListItem bgColor={item.color} onPress={() => null} title={item.title} />;
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
                    borderRadius: 6,
                    marginBottom: 24,
                    marginRight: 24
                  }}
                  source={{ uri: item.collection.image_url || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
                >
                  <TouchableListItem
                    bgColor={'#cccccc88'}
                    onPress={() => null}
                    title={item.collection.title}
                    textColor={Theme.text}
                    itemStyle={{ marginBottom: 0, marginRight: 0 }}
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
  }
}

const styles = StyleSheet.create({
  containerSearchBar: {
    ...globalStyle.pH3,
    backgroundColor: Theme.secondary,
    paddingBottom: 12,
    paddingTop: Layout.iPhoneX ? 64 : 12
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
    height: 50,
    justifyContent: 'center',
    alignContent: 'center'
  },
  searchPlaceholderText: {
    ...globalStyle.cursiveBold12
  },
  headerText: {
    ...globalStyle.cursiveBold12,
    color: Theme.darkText,
    marginLeft: 24
  },
  sectionHeading: {
    ...globalStyle.cursiveBold16,
    color: Theme.darkText,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerFlatlist: {
    marginLeft: 24
  },
  iconRight: {
    alignItems: 'center',
    height: 14,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 30,
    width: 24
  }
});

export default Search;
