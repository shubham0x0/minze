import { userUpdateAsync } from './userUpdateAsync';
export const onPressLogoutAsync = async () => {
  try {
    await userUpdateAsync({});
    // NavigationService.navigate('Loading', {});
  } catch (err) {
    console.warn(err);
  }
};
