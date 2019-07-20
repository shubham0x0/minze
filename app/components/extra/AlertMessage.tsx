import React from 'react';
import Alert, { DropdownAlertType } from 'react-native-dropdownalert';
import { DropDownAlertStyles } from '../../theme';
import NavigationService from '../../utils/NavigationService';

interface Props {
  children?: any;
  type?: string;
  message?: [DropdownAlertType, string, string];
  notification?: any;
}

export const DropdownAlert = (props: Props) => {
  props.notification = NavigationService.notification;
  props.message && NavigationService.notification.alertWithType(...props.message);
  return (
    <React.Fragment>
      {props.children}
      <Alert {...DropDownAlertStyles} ref={(ref: any) => NavigationService.setNotificationRef(ref)} />
    </React.Fragment>
  );
};
