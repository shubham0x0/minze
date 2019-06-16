import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { globalStyle, Theme } from '../../theme';

const LineItemSong = ({ active, downloaded, onPress, songData }: any) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={globalStyle.activeOpacity}
      onPress={() => onPress(songData)}
      style={globalStyle.flex5}
    >
      <Text style={[styles.title, { color: active ? Theme.brandPrimary : Theme.white }]}>{songData.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        {downloaded && (
          <View style={styles.circleDownloaded}>
            <Ionicons color={Theme.blackBg} name="ios-arrow-round-down" size={14} />
          </View>
        )}
        <Text style={styles.artist}>{songData.artist}</Text>
      </View>
    </TouchableOpacity>

    <View style={styles.containerRight}>
      <Feather color={Theme.greyLight} name="more-horizontal" size={20} />
    </View>
  </View>
);

LineItemSong.defaultProps = {
  active: false,
  downloaded: false
};

LineItemSong.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  songData: PropTypes.shape({
    album: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,

  // optional
  active: PropTypes.bool,
  downloaded: PropTypes.bool
};

const styles = StyleSheet.create({
  artist: {
    color: Theme.greyInactive,
    fontSize: 12
  },
  circleDownloaded: {
    alignItems: 'center',
    backgroundColor: Theme.brandPrimary,
    borderRadius: 7,
    height: 14,
    justifyContent: 'center',
    marginRight: 8,
    width: 14
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  },
  title: {
    color: Theme.white,
    fontSize: 16,
    marginBottom: 4
  }
});

export default LineItemSong;
