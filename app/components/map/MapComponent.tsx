import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

interface Props {
  region: Region;
  markers: any[];
  setRegion: (region: Region) => void;
}

const MapComponent: React.FC<Props> = (props: Props) => {
  const { region, setRegion, markers } = props;
  const pinImage = require('../../assets/images/icons/pin.png');
  return region ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={region}
      style={{
        width: '100%',
        minHeight: 160,
        flex: 1,
        marginTop: 20,
        marginBottom: 20
      }}
      loadingEnabled
      onRegionChangeComplete={setRegion}
    >
      {markers.map(marker => (
        <Marker
          key={marker.title.toString()}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          icon={pinImage}
        />
      ))}
    </MapView>
  ) : null;
};

export default MapComponent;
