import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReactNativeParallaxHeader from '../../components/lists/ParallaxList';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native-paper';
const IS_IPHONE_X = false;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

// const images = {
//   background: require('../img/test.jpg'), // Put your own image here
// };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent'
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});
export default class Row extends React.Component<{}, {}> {
  renderNavBar = () => (
    <View style={{}}>
      <View style={{}} />
      <View style={{}}>
        <TouchableOpacity style={{}} onPress={() => {}}>
          <Icon name="add" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={() => {}}>
          <Icon name="search" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{}}>
        <ReactNativeParallaxHeader
          headerMinHeight={30}
          headerMaxHeight={250}
          extraScrollHeight={20}
          navbarColor="#3498db"
          title="Parallax Header ~"
          titleStyle={styles.titleStyle}
          // backgroundImage={images.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={() => (
            <View>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
              <Text> YO</Text>
            </View>
          )}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag')
          }}
        />
      </View>
    );
  }
}
