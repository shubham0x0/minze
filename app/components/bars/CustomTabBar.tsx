import React from 'react';
import { BottomTabBar, MaterialTopTabBar } from 'react-navigation';

// components
import AboveTabBar from './AboveTabBar';

const CustomTabBar = (props: any) => {
  const { navigation } = props;
  return (
    <React.Fragment>
      <AboveTabBar navigation={navigation} info={'none'} />
      <MaterialTopTabBar {...props} />
    </React.Fragment>
  );
};

export default CustomTabBar;
