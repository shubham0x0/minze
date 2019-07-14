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
declare var process: any;

export const API: string | undefined = process.env.API;
export const APP_URL: string | undefined = 'https://mzeroes.github.io/strictly';
export const APP_VERSION: string | undefined = '1.0.1';
export const GRAPHQL_ENDPOINT: string | undefined = __DEV__
  ? `http://192.168.0.104:3000/graphql`
  : `https://minze-server.herokuapp.com/graphql`;
