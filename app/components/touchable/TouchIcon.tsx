import React, { ReactElement } from 'react';
import { TouchableOpacity, GestureResponderEvent, StyleProp } from 'react-native';
import { globalStyle } from '../../theme';

const TouchableIcon = ({ icon, iconSize = 24, onPress, style = {} }: Props) => (
  <TouchableOpacity
    activeOpacity={globalStyle.activeOpacity}
    onPress={onPress}
    hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
    style={[globalStyle.flexCenter, style]}
  >
    {React.cloneElement(icon, { size: iconSize })}
  </TouchableOpacity>
);

interface Props {
  icon: ReactElement;
  onPress: (event: GestureResponderEvent) => void;
  // optional
  iconSize?: number;
  style?: StyleProp<any>;
}

export default TouchableIcon;
