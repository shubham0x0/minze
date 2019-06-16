/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App.tsx';
import { name as appName } from './app.json';
import StorybookUIRoot from './storybook/index.ts';

/**
 *  Leave this as `false` when checking into git.
 **/
const SHOW_STORYBOOK = false;
const RootComponent = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
AppRegistry.registerComponent(appName, () => RootComponent);
