import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class TestScreen extends React.Component<{}, { idToken: string }> {
  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text>Yo</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  authToken: state.authToken
});

export default connect(mapStateToProps)(TestScreen);
