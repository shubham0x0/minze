import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Colors, globalStyle, Theme } from '../theme';

const TouchableListItem = ({ bgColor, onPress, title, thumb, textColor = Theme.textC, itemStyle }: any) => (
  <TouchableOpacity
    activeOpacity={globalStyle.activeOpacity}
    onPress={onPress}
    style={[{ ...styles.touchableitem, ...itemStyle }, { backgroundColor: bgColor }]}
  >
    <Text style={[styles.playlistTitle, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchableitem: {
    borderRadius: 6,
    height: 98,
    flex: 1,
    marginBottom: 24,
    marginRight: 24,
    paddingLeft: 12,
    paddingTop: 12
  },
  playlistTitle: {
    ...globalStyle.cursiveBold22
  }
});

export default TouchableListItem;
