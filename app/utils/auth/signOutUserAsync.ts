import auth from '@react-native-firebase/auth';
import NavigationService from '../navigation/NavigationService';
import { dispatcher } from '../../context';
import { resetContext } from '../../context/Rootcontext/actions';

export const signOutUserAsync = async () => {
  try {
    await auth().signOut();
    dispatcher.dispatch(resetContext(true));
    NavigationService.navigate('Auth', {});
  } catch (err) {
    console.warn(err);
  }
};
