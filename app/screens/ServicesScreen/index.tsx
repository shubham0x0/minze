import React from 'react';
// import PropTypes from 'prop-types';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Theme, Layout, baseStyle } from '../../theme';

// components
import TouchableListItem from '../../components/TouchableListItem';

import deliveryOptions from '../../mockdata/deliveryOptions.json';
import { RootContext } from '../../context';

class Search extends React.Component<any, any> {
  static contextType = RootContext;
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
    const { context } = this;

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
              <Text style={[styles.sectionHeading, { marginLeft: 0 }]}>Delivery Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 20, marginBottom: 20 }} activeOpacity={0.8} onPress={() => null}>
              {context.state.savedAddresses.length === 0 ? (
                <Text>Select Delivery Location</Text>
              ) : (
                <Text
                  ellipsizeMode={'tail'}
                  numberOfLines={3}
                  style={[styles.headerText, { paddingLeft: 0, maxWidth: Layout.window.width / 2 }]}
                >
                  {context.state.savedAddresses[context.state.currentDelivery].title ||
                    context.state.savedAddresses[context.state.currentDelivery].address}
                </Text>
              )}
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
