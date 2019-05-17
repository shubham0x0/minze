/**
 *
 * @description Register App on AppRegistry
 * @url https://github.com/shubhamxy/minze
 *
 * @author Shubham Jain <s.shubjain@gmail.com>
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/navigation/index.tsx';
import { name as appName } from './app.json';
import StorybookUIRoot from './storybook/index.tsx';

/**
 *  @note Leave `SHOW_STORYBOOK` as `false` when checking into git.
 */
const SHOW_STORYBOOK = false;
const RootComponent = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;

AppRegistry.registerComponent(appName, () => RootComponent);
