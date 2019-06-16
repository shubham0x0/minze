import { AUTH_CONFIG } from './keys';

const APP_URL = 'https://mzeroes.github.io/strictly';
const APP_VERSION = '1.0.1';
const GRAPHQL_ENDPOINT = __DEV__ ? `http://192.168.0.104:3000/graphql` : `https://minze-server.herokuapp.com/graphql`;

export { APP_URL, AUTH_CONFIG, APP_VERSION, GRAPHQL_ENDPOINT };
