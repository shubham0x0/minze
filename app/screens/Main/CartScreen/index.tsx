import React from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Colors, Layout, baseStyle } from '../../../theme';
import { getCollections, getActivities } from '../../../utils/getData';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { HeaderBar } from '../../../components/headers/HeaderBar';

class CartScreen extends React.Component<any, any> {
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>{name}</Title>
                <FontAwesome
                  color={Theme.text}
                  style={{ fontSize: 18, justifyContent: 'center', alignSelf: 'center' }}
                  name="trash"
                />
              </View>

              <Subheading style={{ fontSize: 12 }}>QTY. {1}</Subheading>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  color={Theme.text}
                  style={{ fontSize: 10, alignSelf: 'center', paddingRight: 4 }}
                  name="rupee"
                />
                <Subheading style={{ fontSize: 12 }}>{average_cost_for_two && average_cost_for_two}</Subheading>
              </View>
              {/* {item.offers && item.offers.map(self => <Subheading style={{ fontSize: 12 }}>{self.name}</Subheading>)} */}
              <View style={{ paddingBottom: 10, flex: 1, flexWrap: 'wrap' }}>
                <View style={{ flexDirection: 'row', paddingTop: 6, justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ backgroundColor: Colors.grey }}>
                    <FontAwesome color={Theme.text} style={{ color: Theme.textC, padding: 10 }} name="minus" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: Theme.text,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      paddingTop: 6,
                      paddingBottom: 6
                    }}
                  >
                    {' '}
                    Add
                  </Text>
                  <TouchableOpacity style={{ backgroundColor: Colors.grey }}>
                    <FontAwesome color={Theme.text} style={{ color: Theme.textC, padding: 10 }} name="plus" />
                  </TouchableOpacity>
                </View>
              </View>
              <Divider />
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }

  renderItem({ item }: any) {
    const { title, description, image_url } = item.collection;
    return (
      <>
        <ImageBackground style={{ height: 136, width: 200 }} source={{ uri: image_url }} />
        <View style={{ backgroundColor: Colors.white, flexDirection: 'column', height: 64, padding: 10 }}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={[baseStyle.cursiveBold3]}>
            {title}
          </Text>
          <Text numberOfLines={3} ellipsizeMode={'tail'} style={[baseStyle.cursiveBold5]}>
            {description}
          </Text>
        </View>
      </>
    );
  }

  render() {
    const { scrollY } = this.state;

    return (
      <React.Fragment>
        <HeaderBar title={'Cart'} />
        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
          style={baseStyle.container}
        >
          <View style={{ ...baseStyle.spacer11, backgroundColor: Theme.secondary }} />
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: Theme.surface
              }}
            >
              <Text style={[baseStyle.cursiveBold5, { color: Theme.text }]}>Total</Text>
              <TouchableOpacity activeOpacity={1} onPress={() => null} style={{ flexDirection: 'row' }}>
                <Icon size={16} name={'rupee'} color={Theme.text} />
                <Text style={[baseStyle.cursiveBold5, { color: Theme.text, marginLeft: 10 }]}>990</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: Theme.backdrop,
                  height: '100%',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ ...baseStyle.heading5, color: Theme.surface }}>Select Payment Method</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: Theme.surface,
                  height: '100%',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Checkout</Text>
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
    ...baseStyle.cursive5,
    color: Theme.background
  },
  headerText: {
    ...baseStyle.cursiveBold5,
    color: Colors.white,
    marginLeft: 24
  },
  sectionHeading: {
    ...baseStyle.cursiveBold3,
    color: Colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerFlatlist: {
    marginLeft: 24
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    backgroundColor: Theme.surface
  }
});

export default CartScreen;
