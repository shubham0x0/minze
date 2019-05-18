import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import { Colors, baseStyle, Theme, activeOpacity } from '../theme';

const TouchableListItem = ({ bgColor, onPress, title, thumb, textColor = Theme.textC, itemStyle, subtitle }: any) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[{ ...styles.touchableitem, ...itemStyle, backgroundColor: bgColor }]}
  >
    <Text numberOfLines={3} ellipsizeMode={'tail'} style={[styles.title, { color: textColor }]}>
      {title}
    </Text>
    {subtitle && (
      <Text
        numberOfLines={2}
        ellipsizeMode={'tail'}
        style={[styles.subtitle, { color: Colors.grey, padding: 20, paddingLeft: 0 }]}
      >
        {subtitle}
      </Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchableitem: {
    borderRadius: 6,
    height: 98,
    flex: 1,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    margin: 24
  },
  subtitle: {
    ...baseStyle.heading5
  },
  title: {
    ...baseStyle.heading4,
    paddingRight: 20
  }
});

export default TouchableListItem;
