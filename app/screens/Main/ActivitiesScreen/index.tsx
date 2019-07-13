/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, FlatList, RefreshControl } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { Layout, Colors } from '../../../theme';
import { Card, Title, Paragraph, Subheading, Divider } from 'react-native-paper';
import { getCollections, getActivities } from '../../../utils/getData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

interface Props {
  info: any;
  navigation: NavigationScreenProp<NavigationRoute<any>>;
  user: any;
  location: any;
}
interface State {
  collectionData: any[];
  activitiesData: any;
  errorMessage: any;
  isFetching: boolean;
  searchText: string;
}
class ActivitiesScreen extends Component<Props, State> {
  carousel: any;

  state = {
    collectionData: [],
    activitiesData: {
      nearby_restaurants: []
    },
    searchText: '',
    errorMessage: null,
    isFetching: false
  };

  componentWillMount() {
    this.getInfoAsync(this.props.location);
  }

  getInfoAsync = async (location: any) => {
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

  componentDidUpdate(prevProps: Props) {
    // Typical usage (don't forget to compare props):
    if (this.props.location !== prevProps.location) {
      this.getInfoAsync(this.props.location);
    }
  }

  renderItem({ item }: any) {
    const { title, description, image_url } = item.collection;
    return (
      <View>
        <ImageBackground style={{ height: 160, width: 200 }} source={{ uri: image_url }} />
        <View style={{ backgroundColor: '#ffffff07', flex: 1, flexWrap: 'wrap' }}>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </View>
      </View>
    );
  }
  renderRestautrantsItem({ item }: any) {
    const { name, cuisines, thumb, user_rating, average_cost_for_two } = item.restaurant;
    return (
      <Card style={{ paddingTop: 20, backgroundColor: Colors.background }}>
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
                  <FontAwesome style={{ fontSize: 12, alignSelf: 'center', paddingRight: 4 }} name="star" />
                  <Subheading style={{ fontSize: 12 }}>
                    {user_rating.aggregate_rating && user_rating.aggregate_rating}
                  </Subheading>
                  <Text style={{ paddingLeft: 16, fontSize: 16, alignSelf: 'center', paddingRight: 16 }}>•</Text>

                  <FontAwesome style={{ fontSize: 12, alignSelf: 'center', paddingRight: 4 }} name="rupee" />
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

  onRefresh = async () => {
    this.setState({ isFetching: true });
    await this.getInfoAsync(this.props.location);
    this.setState({ isFetching: false });
  };

  filterData = (data: any[]) =>
    data.filter((item: any) => {
      const { name, cuisines } = item.restaurant;
      // console.warn(JSON.stringify(item));
      let temp = 0;
      temp += name.toLowerCase().includes(this.state.searchText.toLowerCase());
      if (cuisines) temp += cuisines.toLowerCase().includes(this.state.searchText.toLowerCase());
      return temp !== 0;
    });

  onChangeSearchText = (searchText: any) => {
    this.setState({ searchText });
  };

  render() {
    return this.state.errorMessage ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.errorMessage}</Text>
        <Text>{JSON.stringify(this.props.user)}</Text>
      </View>
    ) : (
      <View style={{ backgroundColor: Colors.background }}>
        <ScrollView
          style={{ paddingTop: 28, backgroundColor: Colors.background }}
          refreshControl={
            <RefreshControl refreshing={this.state.isFetching} onRefresh={async () => this.onRefresh()} />
          }
        >
          <Carousel
            autoplay
            loop
            autoplayInterval={10000}
            autoplayDelay={10000}
            ref={(c: any) => {
              this.carousel = c;
            }}
            data={this.state.collectionData}
            renderItem={this.renderItem}
            sliderWidth={Layout.window.width}
            itemWidth={200}
          />
          {this.state.activitiesData.nearby_restaurants && (
            <FlatList
              style={{ paddingBottom: 100 }}
              keyExtractor={(item, index) => index.toString()}
              data={
                this.state.searchText === ''
                  ? this.state.activitiesData.nearby_restaurants
                  : this.filterData(this.state.activitiesData.nearby_restaurants)
              }
              renderItem={this.renderRestautrantsItem}
            />
          )}

          {/* <Text>{JSON.stringify(this.state.activitiesData.nearby_restaurants, null, 4)}</Text> */}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  info: state.collectionData,
  user: state.user,
  location: state.location
});

export default connect(mapStateToProps)(ActivitiesScreen);
