import uuid from 'uuid';

import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export const uploadImage = async (path: any, imagename?: string) => {
  const defaultStorage = storage();
  const user = auth().currentUser;
  if (!imagename) {
    imagename = uuid.v4();
  }
  if (user) {
    const imgref = defaultStorage.ref(`images/${user.uid}/${imagename}`);
    const uploadTask = await imgref.putFile(path.uri);
    return uploadTask;
  } else {
    throw Error('USER_DO_NOT_EXIST');
  }
};
