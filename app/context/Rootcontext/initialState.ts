import { IRootState } from './reducers';

export const initialState: IRootState = {
  loading: true,
  user: {
    displayName: '',
    phoneNumber: '',
    email: '',
    photoURL: ''
  },
  savedAddresses: [],
  currentDelivery: 0,
  location: null,
  network: {
    serverStatus: 'unavailable',
    idTokenRegistered: false,
    authToken: '' // from aur servers
  },
  props: {
    aboveTopBar: {
      title: 'title',
      visible: false,
      onPress: () => {},
      navigation: undefined,
      info: 'unavailable'
    }
  }
};
