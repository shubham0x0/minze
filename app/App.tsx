/**
 *
 * @description Entry point for the App
 * @url https://github.com/shubhamxy/minze
 *
 * @author Shubham Jain <s.shubjain@gmail.com>
 * @format
 */
import React from 'react';
import { useScreens } from 'react-native-screens';
import Navigator from './navigation';
import codePush from 'react-native-code-push';
import { ENV } from './config/environment';

// Below is an example of how CodePush behaviour can be made different in production: in this case, update will be installed to prod devices only after user has stopped using it for 2 minutes.

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: ENV === 'production' ? 120 : 0
};
useScreens();

interface Props {}
const AppContainer: React.FC = (props: Props) => <Navigator {...props} />;

const App = codePush(codePushOptions)(AppContainer);
export default App;
