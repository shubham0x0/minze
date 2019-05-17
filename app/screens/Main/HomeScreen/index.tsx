import React from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Colors, Layout, globalStyle } from '../../../theme';
import topGenres from '../mockdata/searchTopGenres.json';
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
                    color={Colors.white}
                    style={{ fontSize: 12, alignSelf: 'center', paddingRight: 4 }}
                    name="star"
                  />
                  <Subheading style={{ fontSize: 12 }}>
                    {user_rating.aggregate_rating && user_rating.aggregate_rating}
                  </Subheading>
                  <Text style={{ paddingLeft: 16, fontSize: 12, alignSelf: 'center', paddingRight: 16 }}>•</Text>

                  <FontAwesome
                    color={Colors.white}
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
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={[globalStyle.cursiveBold16]}>
            {title}
          </Text>
          <Text numberOfLines={3} ellipsizeMode={'tail'} style={[globalStyle.cursiveBold12]}>
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
        <HeaderBar title={'Home'} />

        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
          style={globalStyle.container}
        >
          <View
            style={[
              {
                justifyContent: 'space-between',
                alignContent: 'space-between',
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
                    activeOpacity={globalStyle.activeOpacity}
                    onPress={() => {}}
                    style={{
                      backgroundColor: item.color,
                      borderRadius: 6,
                      height: 60,
                      width: 60,
                      flex: 1,
                      marginRight: 24,
                      padding: 12
                    }}
                  >
                    <Text style={globalStyle.cursive12}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: Theme.surface + 'ef'
              }}
            >
              <Text style={[globalStyle.cursiveBold12, { color: Theme.text }]}>33 Results</Text>
              <TouchableOpacity activeOpacity={1} onPress={() => null} style={{ flexDirection: 'row' }}>
                <Icon size={16} name={'filter'} color={Theme.text} />
                <Text style={[globalStyle.cursiveBold12, { color: Theme.text, marginLeft: 10 }]}>Sort/Filter</Text>
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
    backgroundColor: Colors.white,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 0
  },
  searchPlaceholderText: {
    ...globalStyle.cursive12,
    color: Theme.background
  },
  headerText: {
    ...globalStyle.cursiveBold12,
    color: Colors.white,
    marginLeft: 24
  },
  sectionHeading: {
    ...globalStyle.cursiveBold16,
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
    height: 24,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 30,
    width: 24
  }
});

export default HomeScreen;
