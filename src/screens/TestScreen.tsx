import React, {Component} from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const TestScreen = (props: any) => (
  <View>
    <Text>Test Success</Text>
  </View>
)
const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(mapStateToProps)(TestScreen);
