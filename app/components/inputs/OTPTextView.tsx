import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Theme } from '../../theme';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 22,
    fontWeight: '500',
    height: 50,
    margin: 15,
    textAlign: 'center',
    width: 50
  }
});
interface Props {
  cellTextLength: any;
  inputCount: any;
  handleTextChange: any;
  defaultValue: any;
  offTintColor: any;
  tintColor: any;
  containerStyle: any;
  textInputStyle: any;
}
interface State {
  focusedInput: number;
  otpText: any[];
}
class OTPTextView extends PureComponent<Props, State> {
  inputs: any;
  otpText: any;
  static defaultProps: {
    defaultValue: string;
    inputCount: number;
    tintColor: string;
    offTintColor: string;
    cellTextLength: number;
    containerStyle: {};
    textInputStyle: {};
    handleTextChange: () => void;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      focusedInput: 0,
      otpText: []
    };
    this.inputs = [];
  }

  componentDidMount() {
    const { defaultValue, cellTextLength } = this.props;
    this.otpText = defaultValue.match(new RegExp('.{1,' + cellTextLength + '}', 'g'));
    this.inputs[0].focus();
  }

  onTextChange = (text: { length: any }, i: number) => {
    const { cellTextLength, inputCount, handleTextChange } = this.props;
    this.setState(
      prevState => {
        let { otpText } = prevState;
        otpText[i] = text;
        return {
          otpText
        };
      },
      () => {
        handleTextChange(this.state.otpText.join(''));
        if (text.length === cellTextLength && i !== inputCount - 1) {
          this.inputs[i + 1].focus();
        }
      }
    );
  };

  onInputFocus = (i: any) => {
    this.setState({ focusedInput: i });
  };

  onKeyPress = (e: { nativeEvent: { key: string } }, i: number) => {
    const { otpText = [] } = this.state;
    if (e.nativeEvent.key === 'Backspace' && i !== 0 && otpText[i] === '') {
      this.inputs[i - 1].focus();
    }
  };

  render() {
    const {
      inputCount,
      offTintColor,
      tintColor,
      defaultValue,
      cellTextLength,
      containerStyle,
      textInputStyle,
      ...textInputProps
    } = this.props;

    const TextInputs = [];

    for (let i = 0; i < inputCount; i += 1) {
      let defaultChars = [];
      if (defaultValue) {
        defaultChars = defaultValue.match(new RegExp('.{1,' + cellTextLength + '}', 'g'));
      }
      const inputStyle = [styles.textInput, textInputStyle, { borderColor: offTintColor }];
      if (this.state.focusedInput === i) {
        inputStyle.push({ borderColor: tintColor });
      }

      TextInputs.push(
        <TextInput
          ref={e => {
            this.inputs[i] = e;
          }}
          key={i}
          defaultValue={defaultValue ? defaultChars[i] : ''}
          style={inputStyle}
          maxLength={this.props.cellTextLength}
          onFocus={() => this.onInputFocus(i)}
          onChangeText={text => this.onTextChange(text, i)}
          multiline={false}
          onKeyPress={e => this.onKeyPress(e, i)}
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          {...textInputProps}
        />
      );
    }
    return <View style={[styles.container, containerStyle]}>{TextInputs}</View>;
  }
}

OTPTextView.defaultProps = {
  defaultValue: '',
  inputCount: 6,
  tintColor: Theme.brandPrimary,
  offTintColor: Theme.greyLight,
  cellTextLength: 1,
  containerStyle: {},
  textInputStyle: {},
  handleTextChange: () => {}
};

export default OTPTextView;
