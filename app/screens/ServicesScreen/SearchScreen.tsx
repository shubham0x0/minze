import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Theme, Layout, baseStyle, activeOpacity } from '../../theme';

import SvgSearch from '../../components/icons/Svg.Search';
import { HeaderBar } from '../../components/headers/HeaderBar';

class SearchScreen extends React.Component<any, any> {
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
          <View style={[{ justifyContent: 'flex-start', backgroundColor: Theme.secondary }]}>
            <HeaderBar
              title={'Search'}
              leftComponent={{
                icon: 'arrow-back',
                color: Theme.text,
                onPress: () => {
                  this.props.navigation.goBack();
                }
              }}
            />
          </View>
          <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TouchableOpacity activeOpacity={activeOpacity} onPress={() => null} style={styles.searchPlaceholder}>
                <View style={baseStyle.mR1}>
                  <SvgSearch size={16} fill={Theme.darkText} />
                </View>
                <TextInput
                  autoFocus
                  placeholder={'Search for restaurants, dishes, and more...'}
                  style={styles.searchPlaceholderText}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchBar: {
    ...baseStyle.pH3,
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
  searchPlaceholderText: {
    ...baseStyle.cursiveBold5,
    color: Theme.placeholderText
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

export default SearchScreen;
