import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Layout, baseStyle } from '../../../theme';

// components
import TouchableListItem from '../../../components/TouchableListItem';

import deliveryOptions from '../../../mockdata/deliveryOptions.json';
import TouchIcon from '../../../components/TouchIcon';
import SvgSearch from '../../../components/icons/Svg.Search';
import { getCollections } from '../../../utils/getData';
import { HeaderBar } from '../../../components/headers/HeaderBar';

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
          style={baseStyle.container}
        >
          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: Theme.secondary
              }
            ]}
          >
            <TouchableOpacity activeOpacity={0.8} onPress={() => null} style={{ flexDirection: 'row' }}>
              <FontAwesome style={[styles.sectionHeading]} color={Theme.darkText} name="location-arrow" />
              <Text style={[styles.sectionHeading]}>Delivery Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 20, marginBottom: 20 }} activeOpacity={0.8} onPress={() => null}>
              <Text style={[styles.headerText]}>98, 3rd Floor, Pocket21</Text>
              <Text style={[styles.headerText]}>Sector 24, Rohini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSearchBar}>
            <View style={baseStyle.mV16} />
          </View>
          <Text style={styles.sectionHeading}>Get Anything Delivered.</Text>
          <FlatList
            contentContainerStyle={styles.containerFlatlist}
            data={deliveryOptions}
            keyExtractor={itemObj => itemObj.id.toString()}
            numColumns={2}
            renderItem={itemObj => {
              const { item } = itemObj;

              return <TouchableListItem bgColor={item.color} onPress={() => null} title={item.title} />;
            }}
          />
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchBar: {
    backgroundColor: Theme.secondary
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
    ...baseStyle.cursiveBold5
  },
  headerText: {
    ...baseStyle.cursiveBold5,
    color: Theme.darkText,
    marginLeft: 24
  },
  sectionHeading: {
    ...baseStyle.cursiveBold3,
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
