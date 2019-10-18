import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Theme } from '../../theme';
import { RootContext } from '../../context';
import { View, Text } from 'react-native';

interface Props {
  name: string;
  size: number;
  focused: boolean;
}

const BadgeTabIcon: React.FC<Props> = (props: Props) => {
  const context = useContext(RootContext);
  let badge: number = 0;
  Object.keys(context.state.cart.items).forEach(key => {
    badge += context.state.cart.items[key].quantity;
  });
  return (
    <>
      {badge > 0 ? (
        <View
          style={{
            position: 'absolute',
            left: 26,
            top: 0,
            backgroundColor: 'red',
            borderRadius: 9,
            width: 18,
            height: 18,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white' }}>{badge}</Text>
        </View>
      ) : null}
      <Ionicons
        name={props.name}
        size={props.size}
        style={{
          alignItems: 'center'
        }}
        color={props.focused ? Theme.tabIconActive : Theme.tabIcon}
      />
    </>
  );
};

export default BadgeTabIcon;
