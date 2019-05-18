import React from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Colors, Layout, baseStyle, activeOpacity, statusBarHeight } from '../../../theme';
import topGenres from '../../../mockdata/ourPicks.json';
import { getCollections, getActivities } from '../../../utils/getData';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // search start (24 horizontal padding )
    const searchStart = Layout.window.width - 48;

    this.state = {
      collectionData: [],
      activitiesData: {
        /* eslint-disable @typescript-eslint/camelcase */
        nearby_restaurants: []
      },
      scrollY: new Animated.Value(0),
      searchStart,
      searchEnd: searchStart - 40
    };
  }
  componentWillMount() {
    this.getInfoAsync();
  }

  getInfoAsync = async () => {
    // getCollections().then((obj: any) => {
    //   // const collectionDataArray = Object.keys(obj).map((index: any) => obj[index]);
    //   console.warn(JSON.stringify(obj, null, 4));
    //   this.setState({ collectionData: obj.collections });
    // });
    const data = getCollections();
    this.setState({
      collectionData: data.collections
    });
    // getActivities(location).then((obj: any) => {
    //   console.warn(JSON.stringify(obj, null, 4));
    //   // const collectionDataArray = Object.keys(obj).map((index: any) => obj[index]);
    //   this.setState({ activitiesData: obj });
    // });
    const activities = getActivities();
    this.setState({ activitiesData: activities });
  };
  renderRestautrantsItem({ item }: any) {
    const { name, cuisines, thumb, user_rating, average_cost_for_two } = item.restaurant;
    return (
      <Card style={{ paddingTop: 20, backgroundColor: Theme.background }}>
        <Card.Content>
          <View style={{ flexDirection: 'row' }}>
            <ImageBackground
              style={{ height: 100, width: 100 }}
              source={{ uri: thumb || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
            />
            <View style={{ flex: 1, flexWrap: 'wrap', paddingLeft: 20, paddingRight: 20 }}>
              <Title>{name}</Title>
              <Subheading style={{ fontSize: 12 }}>{cuisines}</Subheading>
              {/* {item.offers && item.offers.map(self => <Subheading style={{ fontSize: 12 }}>{self.name}</Subheading>)} */}
              <View style={{ paddingTop: 30, flex: 1, flexWrap: 'wrap' }}>
                <Divider />
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    color={Theme.text}
                    style={{ fontSize: 12, alignSelf: 'center', paddingRight: 4 }}
                    name="star"
                  />
                  <Subheading style={{ fontSize: 12 }}>
                    {user_rating.aggregate_rating && user_rating.aggregate_rating}
                  </Subheading>
                  <Text style={{ paddingLeft: 16, fontSize: 12, alignSelf: 'center', paddingRight: 16 }}>•</Text>

                  <FontAwesome
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
  }

  // filterData = (data: any[]) =>
  // data.filter((item: any) => {
  //   const { name, cuisines } = item.restaurant;
  //   // console.warn(JSON.stringify(item));
  //   let temp = 0;
  //   temp += name.toLowerCase().includes(this.state.searchText.toLowerCase());
  //   if (cuisines) temp += cuisines.toLowerCase().includes(this.state.searchText.toLowerCase());
  //   return temp !== 0;
  // });

  renderItem({ item }: any) {
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
  }
  render() {
    const { scrollY, searchStart, searchEnd } = this.state;

    return (
      <React.Fragment>
        <HeaderBar
          // title={'Home'}
          containerStyle={{
            backgroundColor: Theme.secondary,
            borderBottomColor: Theme.secondary,
            borderBottomWidth: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -statusBarHeight
          }}
          leftComponent={
            <View>
              <View style={{ flexDirection: 'row', paddingLeft: 12 }}>
                <FontAwesome color={Theme.text} name="location-arrow" />
                <Text style={[styles.sectionHeading]}>Delivery Location</Text>
              </View>
              <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={() => {}}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingLeft: 12
                }}
              >
                {/* <Text style={[styles.headerText]}>Home</Text> */}
                <Text style={[styles.headerText, { marginLeft: 16 }]}>Sector 24, Rohini</Text>
              </TouchableOpacity>
            </View>
          }
          centerComponent={{}}
          rightComponent={{ icon: 'notifications', color: Theme.text }}
        />

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
                alignContent: 'space-between',
                paddingBottom: 20,
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
              renderItem={this.renderItem}
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
          <View>
            <View
              style={{
                display: 'flex',
                // alignContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
                backgroundColor: Theme.surface + 'ef',
                borderTopColor: Colors.lightGray,
                borderTopWidth: 1,
                borderBottomColor: Colors.lightGray,
                borderBottomWidth: 1
              }}
            >
              <Text style={[baseStyle.heading5, { color: Theme.text, justifyContent: 'center' }]}>33 Results</Text>
              <TouchableOpacity activeOpacity={1} onPress={() => null} style={{ flexDirection: 'row' }}>
                <Icon size={16} name={'filter'} color={Theme.text} style={{ justifyContent: 'center' }} />
                <Text style={[baseStyle.heading5, { color: Theme.text, marginLeft: 10, justifyContent: 'center' }]}>
                  Sort/Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.activitiesData.nearby_restaurants && (
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.activitiesData.nearby_restaurants}
              renderItem={this.renderRestautrantsItem}
            />
          )}
        </Animated.ScrollView>
        {/* <View style={styles.iconRight}>
          <TouchIcon icon={<FontAwesome color={Colors.white} name="filter" />} onPress={() => null} />
        </View> */}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchBar: {},
  searchPlaceholder: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.darkText,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 0
  },
  searchPlaceholderText: {
    ...baseStyle.heading5,
    color: Theme.background
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
    // marginTop: 16
  },
  containerFlatlist: {},
  iconRight: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 30,
    width: 24
  }
});

export default HomeScreen;
