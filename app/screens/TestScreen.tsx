import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import MutationOnMount from '../components/graphql/MutationOnMount';
import LoadingAnimated from '../components/loaders/LoadingAnimated';
import { updateAuthToken } from '../store/actions';
import { store } from '../store';
import { Query } from 'react-apollo';
import { styles } from '../theme';
import { FETCH_USER } from '../graphql/queries';
import { LOGIN_USER } from '../graphql/mutations';

const TestScreen = (props: any) => {
  // console.warn(JSON.stringify(store.getState()));

  if (props.authToken) {
    // console.warn(props.authToken);
    return (
      <Query query={FETCH_USER}>
        {({ data, loading, error }: any) => {
          if (error || loading) {
            return (
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text>{JSON.stringify(error, null, 4)}</Text>
                <Text> Loading ... </Text>
              </View>
            );
          }
          return (
            <ScrollView style={styles.container} contentContainerStyle={styles.container}>
              <Text>{JSON.stringify(data, null, 4)}</Text>
            </ScrollView>
          );
        }}
      </Query>
    );
  } else {
    return <TestScreen2 {...props} />;
  }
};

class TestScreen2 extends React.Component<{}, { idToken: string }> {
  state = {
    idToken: ''
  };
  async componentDidMount() {
    // @ts-ignore
    const idToken = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    // console.warn(idToken);
    this.setState({ idToken });
  }
  render() {
    const { idToken } = this.state;
    if (!idToken) return <LoadingAnimated />;
    return (
      <MutationOnMount mutation={LOGIN_USER} variables={{ idToken }}>
        {(mutate: any, { data, loading, error }: any) => {
          if (loading) return <LoadingAnimated />;
          if (data && data.login && data.login.token) {
            console.warn('TOKEN dispatch');
            store.dispatch(updateAuthToken(data.login.token));
          }
          return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
              {/* <Text>{this.state.idToken}</Text> */}
              <Text> {JSON.stringify(data, null, 4)} </Text>
              <Text> {JSON.stringify(loading, null, 4)} </Text>
              <Text> {JSON.stringify(error)} </Text>
            </View>
          );
        }}
      </MutationOnMount>
    );
  }
}
const mapStateToProps = (state: any) => ({
  user: state.user,
  authToken: state.authToken
});

export default connect(mapStateToProps)(TestScreen);
