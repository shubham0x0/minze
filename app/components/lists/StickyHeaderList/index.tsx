import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Layout, Colors, globalStyle } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

// mock data
import browseAll from '../../mockdata/searchBrowseAll.json';
import topGenres from '../../mockdata/searchTopGenres.json';
import TouchIcon from '../../TouchIcon';
import SvgSearch from '../../icons/Svg.Search';

interface Props {}

class StickyHeaderList extends React.Component<Props, any> {
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
          <View style={globalStyle.spacer11}>
            <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.searchPlaceholder}>
              <View style={globalStyle.mR1}>
                <SvgSearch />
              </View>
              <TextInput
                placeholder={'Search for restaurants, dishes, and more...'}
                style={styles.searchPlaceholderText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.searchPlaceholder}>
                <View style={globalStyle.mR1}>
                  <SvgSearch />
                </View>
                <TextInput
                  placeholder={'Search for restaurants, dishes, and more...'}
                  style={styles.searchPlaceholderText}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Text style={styles.sectionHeading}>Your Favourites</Text>
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

          <Text style={styles.sectionHeading}>Browse Food by Catagories</Text>
          <FlatList
            contentContainerStyle={styles.containerFlatlist}
            data={browseAll}
            keyExtractor={itemObj => itemObj.id.toString()}
            numColumns={2}
            renderItem={itemObj => {
              const { item } = itemObj;

              return <TouchableListItem bgColor={item.color} onPress={() => null} title={item.title} />;
            }}
          />
        </Animated.ScrollView>

        <View style={styles.iconRight}>
          <TouchIcon icon={<FontAwesome color={Colors.white} name="filter" />} onPress={() => null} />
        </View>
      </React.Fragment>
    );
  }
}

// Search.propTypes = {
//   // required
//   navigation: PropTypes.object.isRequired
// };

const styles = StyleSheet.create({
  containerSearchBar: {
    ...globalStyle.pH3,
    backgroundColor: Theme.background,
    paddingBottom: 16,
    paddingTop: Layout.iPhoneX ? 64 : 24
  },
  searchPlaceholder: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 4
  },
  searchPlaceholderText: {
    ...globalStyle.cursive14,
    color: Theme.background
  },
  sectionHeading: {
    ...globalStyle.cursiveBold18,
    color: Colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerFlatlist: {
    marginLeft: 24
  },
  iconRight: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 40,
    width: 28
  }
});

export default StickyHeaderList;
