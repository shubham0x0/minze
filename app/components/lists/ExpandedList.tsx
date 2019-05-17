import React from 'react';
import { Animated, View } from 'react-native';
import { styles } from '../../theme';
import { NavigationType } from '../../types';

interface Props {
  navigation: NavigationType;
  fixedContainer?: any;
  stickyContainer?: any;
  mainContainer?: any;
  children?: React.ReactChild;
}

const ExpandedList: React.FC<Props> = (props: Props) => <View style={styles.container} />;

export default ExpandedList;
