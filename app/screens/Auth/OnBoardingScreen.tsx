import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors, Layout, FontWeights } from '../../theme';
import { Button as ButtonBase } from 'react-native-paper';
const { height, width } = Layout.window;

const Button = (props: any) => (
  <ButtonBase {...props} theme={{ roundness: 4, colors: { primary: Colors.primary } }} mode="contained" />
);

const ImagePath = '../../assets/images/onboard';

const Slides = [
  {
    key: 'screen-1',
    title: 'Healthy food',
    text:
      'Enjoy your healthy food during your workday. Discover new dishes everyday and hold your favourite restaurant',
    image: require(`${ImagePath}/screen1.png`)
  },
  {
    key: 'screen-2',
    title: 'Specify your location',
    text: 'Track your order and as soon as you hear the sound of the door. Your food has come.',
    image: require(`${ImagePath}/screen2.png`)
  },
  {
    key: 'screen-3',
    title: 'Delivery Time',
    text: 'We know, being a food lover. Straighten your meal schedule with timed deliveries.',
    image: require(`${ImagePath}/screen3.png`)
  }
];

interface Props {
  navigation: any;
}

interface State {}

/**
 * @name AppIntroScreen.js
 * @type { class }
 * @description This class contains the root component used to
 *              render the AppIntroScreen.
 */

class AppIntroScreen extends Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  navigateToAuth = () => {
    let { navigation } = this.props;
    navigation.navigate('PhoneAuth');
  };

  nextButton = () => {
    return <Button>Next</Button>;
  };

  skipButton = () => {
    return <Button onPress={() => this.appIntroSliderRef.goToSlide(2)}>Skip</Button>;
  };

  doneButton = () => {
    return (
      <Button icon="done" onPress={() => this.navigateToAuth()}>
        Done
      </Button>
    );
  };

  renderScreens = (props: { title?: any; text?: any; image?: any }) => {
    let { title, text } = props;

    return (
      <View style={{ flex: 1, height, width }}>
        <View style={{ flex: 2, backgroundColor: 'transparent' }}>
          <ImageBackground
            source={props.image}
            imageStyle={{ resizeMode: 'cover' }}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: -160,
              backgroundColor: 'transparent'
            }}
          />
        </View>
        <View style={{ flex: 2, backgroundColor: 'transparent' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent'
            }}
          >
            <Text
              style={{
                color: Colors.darkGreen,
                flexWrap: 'wrap',
                fontSize: 26,
                ...FontWeights.medium
              }}
            >
              {title}
            </Text>
          </View>

          <View
            style={{
              flex: 2,
              backgroundColor: 'transparent',
              paddingHorizontal: 16
            }}
          >
            <Text
              style={{
                color: '#444',
                textAlign: 'center',
                fontSize: 16
              }}
            >
              {text}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  appIntroSliderRef: any;

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          height,
          width
        }}
      >
        <AppIntroSlider
          slides={Slides}
          ref={(ref: any) => (this.appIntroSliderRef = ref)}
          showSkipButton
          dotStyle={{ marginTop: 16, backgroundColor: Colors.grey }}
          activeDotStyle={{ marginTop: 16, backgroundColor: Colors.primary }}
          renderItem={this.renderScreens}
          renderSkipButton={this.skipButton}
          renderNextButton={this.nextButton}
          renderDoneButton={this.doneButton}
        />
      </View>
    );
  }
}

export default AppIntroScreen;
