import React from 'react';
import { TouchableNativeFeedback, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  onPress: () => void;
}

class NativeButton extends React.Component<Props, {}> {
  _touchableButtonHandler = async (onPressFunction: () => void) => {
    setTimeout(
      () => {
        onPressFunction();
      },
      200,
      this
    );
  };

  render() {
    const { onPress, children } = this.props;
    return (
      <TouchableNativeFeedback {...this.props} onPress={() => this._touchableButtonHandler(onPress)}>
        <React.Fragment>{children}</React.Fragment>
      </TouchableNativeFeedback>
    );
  }
}

export default NativeButton;
