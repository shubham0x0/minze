import { Linking } from 'react-native';
import { PermissionStatus, PermissionType } from 'expo-permissions/build/Permissions.types';
import * as Permissions from 'expo-permissions';

export default async function getPermission(permission: PermissionType) {
  const { status } = await Permissions.askAsync(permission);
  if (status !== PermissionStatus.GRANTED) {
    Linking.openURL('app-settings:');
    return status;
  }
  return status;
}
