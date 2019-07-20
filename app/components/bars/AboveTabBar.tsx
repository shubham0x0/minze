import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import { Colors, Layout, globalStyle } from '../../theme';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  navigation: any;
  title: any;
  info: any;
  centerContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}

const LeftContainer = (props: Props) => (
  <TouchableOpacity
    activeOpacity={globalStyle.activeOpacity}
    hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
    onPress={props.onPress}
    style={styles.containerIcon}
  >
    {props.leftContent}
  </TouchableOpacity>
);

const RightContainer = (props: Props) => (
  <TouchableOpacity
    activeOpacity={globalStyle.activeOpacity}
    hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
    onPress={props.onPress}
    style={styles.containerIcon}
  >
    {props.rightContent}
  </TouchableOpacity>
);

const CenterContainer = (props: Props) => (
  <React.Fragment>
    {props.info && (
      <View>
        <View style={styles.containerinfo}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.info}>{props.info}</Text>
        </View>
      </View>
    )}
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        minHeight: 30
      }}
    >
      {props.centerContent}
    </View>
  </React.Fragment>
);

const AboveTabBar: React.FC<Props> = (props: Props) => (
  <TouchableOpacity activeOpacity={1} onPress={props.onPress} style={styles.container}>
    {props.children ? (
      props.children
    ) : (
      <React.Fragment>
        {props.leftContent && <LeftContainer {...props} />}
        {props.leftContent && <CenterContainer {...props} />}
        {props.centerContent && <RightContainer {...props} />}
      </React.Fragment>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  info: {
    color: Colors.greyLight,
    fontSize: 12
  },
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    borderBottomColor: Colors.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 40,
    width: '100%'
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  containerinfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: Layout.window.width - 100
  },
  device: {
    color: Colors.brandPrimary,
    fontSize: 10,
    marginLeft: 4,
    textTransform: 'uppercase'
  },
  title: {
    color: Colors.white,
    fontSize: 12
  }
});

export default AboveTabBar;
