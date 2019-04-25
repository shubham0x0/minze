import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    height: 50,
    width: 50,
    borderBottomWidth: 4,
    margin: 5,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: '#000000'
  }
});
interface State {
  focusedInput: number;
  otpText: any;
}
interface Props extends TextInputProps {
  defaultValue: string;
  inputCount: number;
  containerStyle?: object;
  textInputStyle?: object;
  cellTextLength: number;
  tintColor?: string;
  offTintColor?: string;
  handleTextChange: Function;
  inputType?: string;
}
class OTPTextView extends PureComponent<Props, State> {
  otpText: RegExpMatchArray | null | undefined;
  inputs: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      focusedInput: 0,
      otpText: []
    };
    this.inputs = [];
  }
  static defaultProps = {
    defaultValue: '000000',
    inputCount: 6,
    tintColor: '#3CB371',
    offTintColor: '#DCDCDC',
    cellTextLength: 1,
    containerStyle: {},
    textInputStyle: {},
    handleTextChange: () => {}
  };
  componentDidMount() {
    const { defaultValue, cellTextLength } = this.props;
    this.otpText = defaultValue.match(new RegExp('.{1,' + cellTextLength + '}', 'g'));
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
      onSubmitEditing,
      ...textInputProps
    } = this.props;

    const TextInputs = [];

    for (let i = 0; i < inputCount; i += 1) {
      let defaultChars: any = [];
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
          {...textInputProps}
        />
      );
    }
    return <View style={[styles.container, containerStyle]}>{TextInputs}</View>;
  }
}

export default OTPTextView;
