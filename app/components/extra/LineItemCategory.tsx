import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import { baseStyle, Theme, Colors, activeOpacity } from '../../theme';

const LineItemCategory = ({ icon, onPress, title }: any) => (
  <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress} style={styles.container}>
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Feather color={Theme.inactive} name={icon} size={24} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.containerRight}>
      <Feather color={Theme.inactive} name="chevron-right" size={20} />
    </View>
  </TouchableOpacity>
);

LineItemCategory.propTypes = {
  // required
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
    width: '100%'
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  },
  title: {
    color: Colors.white,
    fontSize: 14,
    marginLeft: 16
  }
});

export default LineItemCategory;
