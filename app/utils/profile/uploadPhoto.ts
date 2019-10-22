import uuid from 'uuid';

import firebase from 'react-native-firebase';

export const uploadImage = async (path: any, imagename?: string) => {
  const defaultStorage = firebase.storage();
  const user = firebase.auth().currentUser;
  if (!imagename) {
    imagename = uuid.v4();
  }
  if (user) {
    const imgref = defaultStorage.ref(`images/${user.uid}/${imagename}`);
    const uploadTask = imgref.putFile(path.uri);
    return uploadTask;
  } else {
    throw Error('USER_DO_NOT_EXIST');
  }
};
