import React, { useState, useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Theme, Colors, Layout, baseStyle, activeOpacity, statusBarHeight } from '../../theme';
import topCategories from '../../mockdata/ourPicks.json';
import { getCollections } from '../../utils/getData';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import ScrollView from '../../components/view/ScrollView';
import { RootContext } from '../../context';
import { NavigationType } from '../../types';
import AddressMenu from '../../components/address';
import { Avatar, Icon } from 'react-native-elements';
import { FETCH_TOP_RESTAURANTS } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import ListAnimated from '../../components/loaders/List';

interface Props {
  navigation: NavigationType;
}
const HomeScreen: React.FC<Props> = (props: Props) => {
  const context = useContext(RootContext);
  const { loading, data } = useQuery(FETCH_TOP_RESTAURANTS);
  const [addressMenuVisible, setAddressMenuVisible] = useState(false);
  const leftComponent = () => (
    <>
      <Text style={[styles.sectionHeading, { marginLeft: 0 }]}>Delivery Location</Text>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => setAddressMenuVisible(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={[styles.headerText, { paddingLeft: 0, maxWidth: Layout.window.width / 2 }]}
        >
          {context.state.savedAddresses.length === 0
            ? 'Select Delivery Location'
            : context.state.savedAddresses[context.state.currentDelivery].title ||
              context.state.savedAddresses[context.state.currentDelivery].address}
        </Text>
      </TouchableOpacity>
    </>
  );

  const renderRestautrantsItem = ({ item }: any) => {
    const { name, shortDescription, numRatings, avgPricePerPerson, pictures } = item;
    return (
      <Card
        style={{ margin: 2, backgroundColor: Theme.background }}
        onPress={() => {
          props.navigation.navigate('Menu', {
            menu_id: 101,
            restaurant_name: name
          });
        }}
      >
        <Card.Content style={{ flexDirection: 'row' }}>
          <View>
            <ImageBackground
              style={{ width: 100, height: 100 }}
              source={{ uri: pictures[0].url || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
            />
            <View style={{ width: 100, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 10 }}>
              <Icon
                color={Theme.text}
                type={'material-community'}
                iconStyle={{ fontSize: 10 }}
                style={{ paddingHorizontal: 10 }}
                name="star"
              />
              <Subheading style={{ fontSize: 8, paddingLeft: 10 }}>{numRatings || 0}</Subheading>
              <Divider />
              <Subheading style={{ fontSize: 8, paddingLeft: 10 }}>{numRatings || 'No'} Reviews</Subheading>
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Title>{name}</Title>
            <Divider />
            <Subheading numberOfLines={3} ellipsizeMode={'tail'} style={{ flexWrap: 'wrap', fontSize: 10 }}>
              {shortDescription}
            </Subheading>
            <Divider />
            <View style={{ paddingTop: 10, flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'material-icons'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="local-offer"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>30% Off</Subheading>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'material-community'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="timelapse"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>40 Min</Subheading>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'font-awesome'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="rupee"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>{avgPricePerPerson || 1000} for one</Subheading>
                </View>
                <Divider />
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };

  const renderCategoryItem = (itemObj: any) => {
    const { item } = itemObj;
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => {}}
        style={{
          height: 64,
          width: 64,
          flex: 1,
          margin: 12,
          padding: 6
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            backgroundColor: Colors.greyWhite,
            height: 32,
            width: 64
          }}
        >
          <Icon size={32} name={item.icon} type={item.type} color={Theme.text} containerStyle={{ marginTop: 12 }} />
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={[
            baseStyle.heading5,
            {
              alignSelf: 'center',
              marginTop: 12,
              paddingLeft: 6,
              height: 32,
              fontSize: 10
            }
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCarousalItem = ({ item }: any) => {
    const { title, description, image_url } = item.collection;
    return (
      <>
        <ImageBackground style={{ height: 136, width: 200 }} source={{ uri: image_url }} />
        <View style={{ backgroundColor: Colors.greyWhite, flexDirection: 'column', height: 64, padding: 10 }}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={[baseStyle.heading3]}>
            {title}
          </Text>
          <Text numberOfLines={2} ellipsizeMode={'tail'} style={[baseStyle.heading5]}>
            {description}
          </Text>
        </View>
      </>
    );
  };
  const rightComponent = () => {
    const onPress = () => {
      props.navigation.navigate('Profile');
    };
    if (context.state.user.photoURL) {
      return <Avatar onPress={onPress} rounded source={{ uri: context.state.user.photoURL }} />;
    } else {
      return <Icon name="person" onPress={onPress} />;
    }
  };
  return (
    <ScrollView
      headerProps={{
        containerStyle: {
          backgroundColor: Theme.secondary,
          borderBottomColor: Colors.greyLight,
          borderBottomWidth: StyleSheet.hairlineWidth,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -statusBarHeight
        },
        leftComponent: leftComponent(),
        centerComponent: {},
        rightComponent: rightComponent()
      }}
      topComponent={
        <View
          style={[
            {
              justifyContent: 'space-between',
              alignContent: 'space-between',
              padding: 20,
              paddingLeft: 0,
              paddingRight: 0,
              backgroundColor: Theme.secondary
            }
          ]}
        >
          <Carousel
            autoplay
            loop
            autoplayInterval={10000}
            autoplayDelay={10000}
            data={getCollections().collections}
            renderItem={renderCarousalItem}
            sliderWidth={Layout.window.width}
            itemWidth={200}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerFlatlist}
            data={topCategories}
            keyExtractor={itemObj => itemObj.id.toString()}
            renderItem={renderCategoryItem}
          />
        </View>
      }
      stickyComponent={
        <>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
              backgroundColor: Theme.surface + 'ef',
              borderBottomColor: Theme.secondary,
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
          >
            <Text style={[baseStyle.heading5, { color: Theme.text, justifyContent: 'center' }]}>33 Results</Text>
            <TouchableOpacity activeOpacity={activeOpacity} onPress={() => null} style={{ flexDirection: 'row' }}>
              <Icon
                size={16}
                name={'filter'}
                type={'font-awesome'}
                color={Theme.text}
                style={{ justifyContent: 'center' }}
              />
              <Text style={[baseStyle.heading5, { color: Theme.text, marginLeft: 10, justifyContent: 'center' }]}>
                Sort/Filter
              </Text>
            </TouchableOpacity>
          </View>
        </>
      }
    >
      <AddressMenu
        currentDelivery={context.state.currentDelivery}
        savedAddresses={context.state.savedAddresses}
        handleCloseButton={() => {
          setAddressMenuVisible(false);
        }}
        visible={addressMenuVisible}
      />
      {loading ? (
        <ListAnimated />
      ) : (
        <FlatList
          style={{ marginBottom: 200 }}
          keyExtractor={(item, index) => index.toString()}
          data={data.topRestaurants}
          renderItem={renderRestautrantsItem}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchPlaceholder: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.darkText,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 0
  },
  headerText: {
    ...baseStyle.heading5,
    color: Theme.text,
    borderBottomColor: Theme.brandPrimary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 4,
    paddingBottom: 6
  },
  sectionHeading: {
    ...baseStyle.heading5,
    color: Theme.darkText,
    marginLeft: 12
  },
  containerFlatlist: {}
});

export default HomeScreen;
