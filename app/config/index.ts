/// //////////////////////////////////////////////////////////////////////////////
// Load environment variables in.
/// //////////////////////////////////////////////////////////////////////////////
import keys from './keys';

export default Object.freeze({
  APP_VERSION: '3.31.36',
  APP_URL: 'https://minze-server.herokuapp.com',
  API_ENDPOINT: 'https://minze-server.herokuapp.com',
  GRAPHQL_ENDPOINT: 'https://minze-server.herokuapp.com/graphql',
  ...keys
});
