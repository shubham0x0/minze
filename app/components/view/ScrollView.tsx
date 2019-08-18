import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import { Theme, Layout, baseStyle } from '../../theme';
import { HeaderBar, Props as HeaderProps } from '../headers/HeaderBar';

interface Props {
  disableHeader?: boolean;
  disableStickyHeader?: boolean;
  headerProps?: HeaderProps;
  headerComponent?: React.ReactChild;
  topComponent?: React.ReactChild;
  stickyComponent?: React.ReactChild;
  children?: React.ReactChild | React.ReactChild[];
  stickyHeaderIndices?: number[];
}

const ScrollView: React.FC<Props> = (props: Props) => {
  const [scrollY] = useState(new Animated.Value(0));
  const stickyHeaderIndices = props.stickyHeaderIndices || props.disableStickyHeader ? [0, 2] : [1];
  return (
    <React.Fragment>
      {!props.disableStickyHeader &&
        !props.disableHeader &&
        (props.headerComponent || <HeaderBar {...props.headerProps} />)}
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={stickyHeaderIndices}
        style={[baseStyle.container, { minHeight: Layout.window.height }]}
      >
        {props.disableStickyHeader && (props.headerComponent || <HeaderBar {...props.headerProps} />)}
        {props.topComponent ? props.topComponent : <View />}
        {props.stickyComponent ? props.stickyComponent : <View />}
        {props.children}
      </Animated.ScrollView>
    </React.Fragment>
  );
};
ScrollView.defaultProps = {
  disableStickyHeader: false,
  disableHeader: false
};
export default ScrollView;
