import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Theme, Colors, Layout, baseStyle, activeOpacity, statusBarHeight } from '../../theme';
import topGenres from '../../mockdata/ourPicks.json';
import { getCollections, getActivities } from '../../utils/getData';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollView from '../../components/view/ScrollView';
import { RootContext } from '../../context';
import { NavigationType } from '../../types';
import OverlayMenu from '../../components/menu';
import AddressMenu from '../../components/address';
interface Props {
  navigation: NavigationType;
}
const HomeScreen: React.FC<Props> = (props: Props) => {
  const [activitiesData, setActivitiesData]: any = useState({
    nearby_restaurants: []
  });

  const context = useContext(RootContext);

  const getInfoAsync = async () => {
    const activities = getActivities();
    setActivitiesData(activities);
  };

  useEffect(() => {
    getInfoAsync();
  }, []);
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
        {context.state.savedAddresses.length === 0 ? (
          <Text>Select Delivery Location</Text>
        ) : (
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={[styles.headerText, { paddingLeft: 0, maxWidth: Layout.window.width / 2 }]}
          >
            {context.state.savedAddresses[context.state.currentDelivery].title ||
              context.state.savedAddresses[context.state.currentDelivery].address}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );

  const renderRestautrantsItem = ({ item }: any) => {
    const { name, cuisines, thumb, user_rating, average_cost_for_two } = item.restaurant;
    return (
      <Card
        style={{ paddingTop: 20, backgroundColor: Theme.background }}
        onPress={() => {
          props.navigation.navigate('Menu', {
            menu_id: 101,
            restaurant_name: name
          });
        }}
      >
        <Card.Content>
          <View style={{ flexDirection: 'row' }}>
            <ImageBackground
              style={{ height: 100, width: 100 }}
              source={{ uri: thumb || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
            />
            <View style={{ flex: 1, flexWrap: 'wrap', paddingLeft: 20, paddingRight: 20 }}>
              <Title>{name}</Title>
              <Subheading style={{ fontSize: 12 }}>{cuisines}</Subheading>
              <View style={{ paddingTop: 30, flex: 1, flexWrap: 'wrap' }}>
                <Divider />
                <View style={{ flexDirection: 'row' }}>
                  <Icon color={Theme.text} style={{ fontSize: 12, alignSelf: 'center', paddingRight: 4 }} name="star" />
                  <Subheading style={{ fontSize: 12 }}>
                    {user_rating.aggregate_rating && user_rating.aggregate_rating}
                  </Subheading>
                  <Text style={{ paddingLeft: 16, fontSize: 12, alignSelf: 'center', paddingRight: 16 }}>•</Text>

                  <Icon
                    color={Theme.text}
                    style={{ fontSize: 10, alignSelf: 'center', paddingRight: 4 }}
                    name="rupee"
                  />
                  <Subheading style={{ fontSize: 12 }}>
                    {average_cost_for_two && average_cost_for_two} for two{' '}
                  </Subheading>
                </View>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };

  const renderItem = ({ item }: any) => {
    const { title, description, image_url } = item.collection;
    return (
      <>
        <ImageBackground style={{ height: 136, width: 200 }} source={{ uri: image_url }} />
        <View style={{ backgroundColor: Colors.white, flexDirection: 'column', height: 64, padding: 10 }}>
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
  const [overlayMenuVisible, setOverlayMenuVisible] = useState(false);
  const [addressMenuVisible, setAddressMenuVisible] = React.useState(false);

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
        rightComponent: {
          onPress: () => {
            // setOverlayMenuVisible(true);
            props.navigation.navigate('Profile');
          },
          icon: 'person',
          color: Theme.text
        }
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
            ref={() => {
              // this.carousel = c;
            }}
            data={getCollections().collections}
            renderItem={renderItem}
            sliderWidth={Layout.window.width}
            itemWidth={200}
          />
          <FlatList
            style={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerFlatlist}
            data={topGenres}
            keyExtractor={itemObj => itemObj.id.toString()}
            renderItem={itemObj => {
              const { item } = itemObj;
              return (
                <TouchableOpacity
                  activeOpacity={activeOpacity}
                  onPress={() => {}}
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 3,
                    height: 60,
                    width: 60,
                    flex: 1,
                    margin: 12,
                    // marginRight: 24,
                    // marginLeft: 24,
                    paddingLeft: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingBottom: 12
                  }}
                >
                  <Text numberOfLines={3} ellipsizeMode={'tail'} style={baseStyle.heading5}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
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
              <Icon size={16} name={'filter'} color={Theme.text} style={{ justifyContent: 'center' }} />
              <Text style={[baseStyle.heading5, { color: Theme.text, marginLeft: 10, justifyContent: 'center' }]}>
                Sort/Filter
              </Text>
            </TouchableOpacity>
          </View>
        </>
      }
    >
      {activitiesData.nearby_restaurants && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={activitiesData.nearby_restaurants}
          renderItem={renderRestautrantsItem}
        />
      )}
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
    color: Theme.darkText,
    borderBottomColor: Theme.primary,
    borderBottomWidth: 1,
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
