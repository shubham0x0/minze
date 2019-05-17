import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import { dispatcher } from '../../context';
import { resetContext } from '../../context/Rootcontext/actions';
// import { store } from '../../store';

export const signOutUserAsync = async () => {
  try {
    await firebase.auth().signOut();
    await dispatcher.dispatch(resetContext(true));
    // store.dispatch({
    //   type: 'SIGNOUT_REQUEST'
    // })
    NavigationService.navigate('Auth', {});
  } catch (error) {
    // console.warn(error);
  }
};
