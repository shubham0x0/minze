/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { styles, Layout } from '../../theme';
import { Card } from 'react-native-paper';
import { getCollections, getActivities } from '../../utils/getData';

interface Props {
  info: any;
  navigaion: any;
  user: any;
  location: any;
}
interface State {
  collectionData: any[];
  activitiesData: any;
  errorMessage: any;
}
class HomeScreen extends Component<Props, State> {
  carousel: any;

  state = {
    collectionData: [],
    activitiesData: {},
    errorMessage: null
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
    this.setState({ collectionData: data.collections });
    getActivities(location).then((obj: any) => {
      console.warn(JSON.stringify(obj, null, 4));
      // const collectionDataArray = Object.keys(obj).map((index: any) => obj[index]);
      this.setState({ activitiesData: obj });
    });
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
      <Card>
        <ImageBackground style={{ height: 200 }} source={{ uri: image_url }}>
          <Card.Title style={{ backgroundColor: '#cccccc88' }} title={title} subtitle={description} />
        </ImageBackground>
      </Card>
    );
  }

  render() {
    return this.state.errorMessage ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.errorMessage}</Text>
        <Text>{JSON.stringify(this.props.user)}</Text>
      </View>
    ) : (
      <View style={[styles.container, { paddingTop: 20 }]}>
        <ScrollView>
          <Carousel
            // autoplay
            loop
            autoplayDelay={3000}
            ref={(c: any) => {
              this.carousel = c;
            }}
            data={this.state.collectionData}
            renderItem={this.renderItem}
            sliderWidth={Layout.window.width}
            itemWidth={Layout.window.width / 1.2}
          />
          <Text>{JSON.stringify(this.state.activitiesData)}</Text>
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

export default connect(mapStateToProps)(HomeScreen);
