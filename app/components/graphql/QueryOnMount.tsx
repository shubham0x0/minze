import React from 'react';
import { Query } from 'react-apollo';

class DoQuery extends React.Component<{ query: any }> {
  componentDidMount() {
    this.props.query();
  }
  render() {
    return null;
  }
}

const QueryOnMount = ({ children, ...other }: any) => (
  <Query {...other}>
    {(query: any, { data, loading, error }: any) => (
      <React.Fragment>
        <DoQuery query={query} />
        {children && children(query, { data, loading, error })}
      </React.Fragment>
    )}
  </Query>
);

export default QueryOnMount;
