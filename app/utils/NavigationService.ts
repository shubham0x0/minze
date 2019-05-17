// NavigationService.js
// this provides navigator directly
import { NavigationActions, DrawerActions } from 'react-navigation';

let navigator: any;
let notification: any;
// this saves the ref to the top App level navigator
function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function setNotificationRef(notificationRef: any) {
  notification = notificationRef;
}

function toggleDrawer() {
  navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  setTopLevelNavigator,
  navigate,
  toggleDrawer,
  setNotificationRef,
  notification
};
