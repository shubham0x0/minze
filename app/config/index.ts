/// //////////////////////////////////////////////////////////////////////////////
// Load environment variables in.
//
// IMPORTANT:
//
//   1.  These might be null, so fallback to sane defaults accordingly where you
//       make use of these.
//
//   2.  You must use this syntax: process.env.NAME_OF_ENV_VAR.  No funny stuff
//       or the babel plugin won't work.
//
//   **3.  You must whitelist each one in your `babel` config.
//
// NOTE:
//
//   Babel will cache things extensively. In dev, to bust this cache to pick up
//   new environment variable values, just change this file and resave it.
//
//   Or run `yarn start --reset-cache` to nuke babel's cache entirely
//   (overkill).
//
/// //////////////////////////////////////////////////////////////////////////////

// tell typescript that there will be a the `node.js` process global variable used
// declare var process: any;
/// /////////////////////////////////////////////////////////////////////////////
import ENV from 'react-native-config';

// loads environment variables from a .env file into process.env
// these env vars will be exported to be used in the app directly
// runtimeEnvTest(ENV_VARS);

/// //////////////////////////////////////////////////////////////////////////////

const CONFIG = Object.freeze({
  APP_ENV: (ENV.APP_ENV as string) || 'development',
  APP_URL: (ENV.APP_URL as string) || '',
  APP_VERSION: 1,
  GOOGLE_MAP_API_KEY: (ENV.RN_GOOGLE_MAPS_API_KEY as string) || '',
  API_ENDPOINT: (ENV.API_ENDPOINT as string) || 'https://minze-server.herokuapp.com',
  GRAPHQL_ENDPOINT: (ENV.API_ENDPOINT as string) || 'https://minze-server.herokuapp.com/graphql',
  SERVER_ENV: (ENV.SERVER_ENV as string) || 'development'
});

export default CONFIG;
export * from './keys';
