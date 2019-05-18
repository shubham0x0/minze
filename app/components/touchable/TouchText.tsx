import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { baseStyle, activeOpacity } from '../../theme';

const TouchText = ({ onPress, style, styleText, text }: any) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={onPress}
    style={[baseStyle.flexCenter, style]}
  >
    <Text style={styleText}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  style: {},
  styleText: {}
};

TouchText.propTypes = {
  // required
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  // optional
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object]),
  styleText: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object])
};

export default TouchText;
