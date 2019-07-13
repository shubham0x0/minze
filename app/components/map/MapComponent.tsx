/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { styles } from '../../theme';
import { getLocationUpdate } from '../../utils/getLocation';
import {NavigationRoute, NavigationScreenProp } from 'react-navigation';

interface Props {
  info: any;
  navigation: NavigationScreenProp<NavigationRoute<any>>;
  user: any;
  location: any;
}
interface State {
  collectionData: any[];
  errorMessage: any;
  delta: any;
}
class MapComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collectionData: [],
      errorMessage: null,
      delta: {
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021
      }
    };
  }

  async componentWillMount() {
    await this.getLocationAsync();
  }

  onRegionChange = () => {
    // this.setState({ region });
  };

  getLocationAsync = async () => {
    await getLocationUpdate();
  };

  render() {
    const marker = {
      latlng: {
        ...this.props.location.coords
      },
      title: "Shubham' Home!",
      description: 'This is house of a future nobel price winner...'
    };
    const region = {
      ...this.props.location.coords,
      ...this.state.delta
    };
    return this.state.errorMessage ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.errorMessage}</Text>
      </View>
    ) : (
      <View style={[styles.container, { paddingTop: 20 }]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // customMapStyle={mapstyle}
          style={{
            flex: 1
          }}
          loadingEnabled
          region={region}
        >
          <Marker coordinate={marker.latlng} title={marker.title} description={marker.description} />
        </MapView>
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  user: state.user,
  location: state.location
});

export default connect(mapStateToProps)(MapComponent);
