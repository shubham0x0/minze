import React from 'react';
import { TouchableOpacity, ButtonProps, TouchableOpacityProps, Text } from 'react-native';
import { activeOpacity } from '../../theme';
interface Props extends TouchableOpacityProps {
  onPress: () => void;
  title?: string;
}
class TouchableOpacityButton extends React.Component<Props, {}> {
  render() {
    const { onPress, children } = this.props;
    return (
      <TouchableOpacity activeOpacity={activeOpacity} {...this.props} onPress={onPress}>
        <React.Fragment>
          {children}
          {this.props.title && <Text>{this.props.title}</Text>}
        </React.Fragment>
      </TouchableOpacity>
    );
  }
}

export default TouchableOpacityButton;
