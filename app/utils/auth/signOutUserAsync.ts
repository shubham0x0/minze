import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import { dispatcher } from '../../context';
import { resetContext, updateUser } from '../../context/Rootcontext/actions';
import { store } from '../../store';
import { updateloginStatus } from '../../store/actions';

export const signOutUserAsync = async () => {
  const response = await firebase.auth().signOut();
  store.dispatch(updateloginStatus(false));
  dispatcher.dispatch(resetContext(true));
  await NavigationService.navigate('Auth', {});
};
