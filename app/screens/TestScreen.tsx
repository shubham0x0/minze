import React, { useContext } from 'react';
import ScrollView from '../components/view/ScrollView';
import { RootContext } from '../context';
import { Text } from 'react-native';
import { store } from '../store';

export default (props: any) => {
  const context = useContext(RootContext);
  return (
    <ScrollView>
      <Text>CONTEXT</Text>
      <Text>{JSON.stringify(context)}</Text>
      <Text>STATE</Text>
      <Text>{JSON.stringify(store.getState())}</Text>
    </ScrollView>
  );
};
