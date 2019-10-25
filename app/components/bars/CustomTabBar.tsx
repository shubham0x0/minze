import React, { useContext } from 'react';
import { MaterialTopTabBar } from 'react-navigation';

// components
import AboveTabBar from './AboveTabBar';
import { RootContext } from '../../context';

const CustomTabBar = (props: any) => {
  const { navigation } = props;
  const { state } = useContext(RootContext);
  return (
    <React.Fragment>
      <AboveTabBar {...state.props.aboveTopBar} navigation={navigation} />
      <MaterialTopTabBar {...props} />
    </React.Fragment>
  );
};

export default CustomTabBar;
