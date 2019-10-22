import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import { dispatcher } from '../../context';
import { resetContext } from '../../context/Rootcontext/actions';

export const signOutUserAsync = async () => {
  try {
    await firebase.auth().signOut();
    dispatcher.dispatch(resetContext(true));
    NavigationService.navigate('Auth', {});
  } catch (err) {
    console.warn(err);
  }
};
