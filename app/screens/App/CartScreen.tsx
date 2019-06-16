import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { styles, Theme } from '../../theme';
import MapComponent from '../../components/map/MapComponent';

const CartScreen = (props: any) => (
  <View style={[styles.container, { padding: 20 }]}>
    <ScrollView>
      <Text>Cart is empty</Text>
    </ScrollView>
    <MapComponent {...props} />
  </View>
);

const mapStateToProps = (state: any) => ({
  user: state.cart
});

export default connect(mapStateToProps)(CartScreen);
