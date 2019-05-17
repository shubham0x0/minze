import React from 'react';
import { Mutation } from 'react-apollo';
import { View } from 'react-native';

class DoMutation extends React.Component<{ mutate: any }> {
  componentDidMount() {
    this.props.mutate();
  }
  render() {
    return null;
  }
}

const MutationOnMount = ({ children, ...other }: any) => (
  <Mutation {...other}>
    {(mutate: any, { data, loading, error }: any) => (
      <React.Fragment>
        <DoMutation mutate={mutate} />
        {children && children(mutate, { data, loading, error })}
      </React.Fragment>
    )}
  </Mutation>
);

// const doMutate = ({ func, ...other }: any) => (
//   <Mutation {...other}>
//     {(mutate: any, { data, loading, error }: any) => {

//       return <View />;
//     }}
//   </Mutation>
// );

// doMutate(1, mutation={LOGIN_USER}, variables={{ idToken }})
export default MutationOnMount;
