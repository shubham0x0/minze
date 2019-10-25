import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Theme, Layout, Colors, FontWeights } from '../../theme';
import { Button } from 'react-native-paper';
const { height, width } = Layout.window;
import { NavigationType } from '../../types';

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
  navigation: NavigationType;
}

interface State {}

/**
 * @name AppIntroScreen.js
 * @type { class }
 * @description This class contains the root component used to
 *              render the AppIntroScreen.
 */

const AppIntroScreen: React.FC<Props> = (props: Props) => {
  const navigateToAuth = () => {
    const { navigation } = props;
    navigation.navigate('PhoneAuth');
  };

  const nextButton = () => <Button testID="nextButton">Next</Button>;

  const skipButton = () => <Button onPress={() => appIntroSliderRef.goToSlide(2)}>Skip</Button>;

  const doneButton = () => (
    <Button icon="done" testID="doneButton" onPress={navigateToAuth}>
      Done
    </Button>
  );

  const renderScreens = (props: { title?: any; text?: any; image?: any }) => {
    const { title, text } = props;

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
              testID="title"
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
              testID="description"
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
  let appIntroSliderRef: any;

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
        ref={(ref: any) => (appIntroSliderRef = ref)}
        showSkipButton
        dotStyle={{ marginTop: 16, backgroundColor: Theme.secondary }}
        activeDotStyle={{ marginTop: 16, backgroundColor: Theme.primary }}
        renderItem={renderScreens}
        renderSkipButton={skipButton}
        renderNextButton={nextButton}
        renderDoneButton={doneButton}
      />
    </View>
  );
};

export default AppIntroScreen;
