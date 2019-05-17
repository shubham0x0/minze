import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Theme } from '../../theme';

interface Props {
  name: string;
  size: number;
  focused: boolean;
}

export default class TabBarIcon extends React.Component<Props, {}> {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={this.props.size}
        style={{
          alignItems: 'center'
        }}
        color={this.props.focused ? Theme.tabIconActive : Theme.tabIcon}
      />
    );
  }
}
