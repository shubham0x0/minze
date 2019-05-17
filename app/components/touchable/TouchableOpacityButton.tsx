import React from 'react';
import { TouchableOpacity, ButtonProps, TouchableOpacityProps } from 'react-native';
interface Props extends TouchableOpacityProps {
  onPress: () => void;
}
class TouchableOpacityButton extends React.Component<Props, {}> {
  render() {
    const { onPress, children } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.9} {...this.props} onPress={onPress}>
        <React.Fragment>{children}</React.Fragment>
      </TouchableOpacity>
    );
  }
}

export default TouchableOpacityButton;
