import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

// components
import TouchableIcon from '../touchable/TouchIcon';
import { globalStyle, Theme, Layout, Colors } from '../../theme';

const ScreenHeader = ({ navigation, showBack, title }: any) => (
  <BlurView tint="dark" intensity={96} style={styles.container}>
    {showBack && (
      <View style={styles.left}>
        <TouchableIcon
          icon={<Feather color={Colors.white} name="chevron-left" />}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    )}

    <View style={styles.containerText}>
      <Text style={styles.text}>{title}</Text>
    </View>

    {showBack && <View style={globalStyle.flex1} />}
  </BlurView>
);

ScreenHeader.defaultProps = {
  showBack: false
};

ScreenHeader.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,

  // optional
  showBack: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: Layout.iPhoneX ? 48 : 24
  },
  containerText: {
    ...globalStyle.flex5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    ...globalStyle.flex1,
    alignItems: 'flex-start'
  },
  text: {
    color: Colors.white,
    // fontFamily: fonts.spotifyBold,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default ScreenHeader;
