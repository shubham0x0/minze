import ApolloClient from 'apollo-boost';

import CONFIG from '../config';

const client = (token?: any) => new ApolloClient({
    uri: CONFIG.GRAPHQL_ENDPOINT,
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

export default client;
