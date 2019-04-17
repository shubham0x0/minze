import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../theme';

const TestScreen = (props: any) => (
  <View style={[styles.container, { padding: 20 }]}>
    <ScrollView>
      <Text>Test Screen</Text>
      <Text>{JSON.stringify(props, null, 2)}</Text>
    </ScrollView>
  </View>
);

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(mapStateToProps)(TestScreen);
