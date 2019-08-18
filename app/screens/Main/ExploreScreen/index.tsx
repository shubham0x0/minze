import React, { useContext } from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Theme, Layout, baseStyle, activeOpacity, statusBarHeight } from '../../../theme';

import TouchableListItem from '../../../components/TouchableListItem';

import topGenres from '../../../mockdata/ourPicks.json';
import SvgSearch from '../../../components/icons/Svg.Search';
import { getCollections } from '../../../utils/getData';
import ScrollView from '../../../components/view/ScrollView';
import { RootContext } from '../../../context';
import AddressMenu from '../../../components/address';

const ExploreScreen: React.FC<any> = (props: any) => {
  const scrollY = new Animated.Value(0);
  const searchStart = Layout.window.width - 48;
  const searchEnd = Layout.window.width - 88;
  const context = useContext(RootContext);
  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: 'clamp'
  });
  const [addressMenuVisible, setAddressMenuVisible] = React.useState(false);
  return (
    <ScrollView
      disableStickyHeader
      headerProps={{
        containerStyle: {
          backgroundColor: Theme.secondary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -statusBarHeight
        },
        leftComponent: (
          <>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.subheaderText]}>Delivery Location</Text>
            </View>
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => {
                setAddressMenuVisible(true);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingLeft: 12
              }}
            >
              {context.state.savedAddresses.length === 0 ? (
                <Text>Select Delivery Location</Text>
              ) : (
                <Text style={[styles.headerText, { paddingLeft: 0 }]}>
                  {context.state.savedAddresses[context.state.currentDelivery].title ||
                    context.state.savedAddresses[context.state.currentDelivery].address}
                </Text>
              )}
            </TouchableOpacity>
          </>
        ),
        centerComponent: {},
        rightComponent: { icon: 'more-vert', color: Theme.text }
      }}
      stickyComponent={
        <View style={styles.containerSearchBar}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity activeOpacity={activeOpacity} onPress={() => null} style={styles.searchPlaceholder}>
              <View style={baseStyle.mR1}>
                <SvgSearch size={16} fill={Theme.darkText} />
              </View>
              <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={() => {
                  props.navigation.navigate('Search');
                }}
                style={styles.searchContainer}
              >
                <Text style={styles.searchPlaceholderText}>Search for restaurants, dishes, and more...</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </Animated.View>
        </View>
      }
    >
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
        contentContainerStyle={[styles.containerFlatlist, { paddingBottom: 200 }]}
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
      <AddressMenu
        currentDelivery={context.state.currentDelivery}
        savedAddresses={context.state.savedAddresses}
        handleCloseButton={() => {
          setAddressMenuVisible(false);
        }}
        visible={addressMenuVisible}
      />
    </ScrollView>
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
    ...baseStyle.heading5,
    color: Theme.darkText,
    borderBottomColor: Theme.primary,
    borderBottomWidth: 1,
    padding: 4,
    paddingBottom: 6
  },
  subheaderText: {
    ...baseStyle.heading5,
    color: Theme.darkText,
    marginLeft: 12
  },
  sectionHeading: {
    ...baseStyle.heading4,
    color: Theme.darkText,
    padding: 12,
    paddingTop: 20
  },

  containerFlatlist: {}
});

export default ExploreScreen;
