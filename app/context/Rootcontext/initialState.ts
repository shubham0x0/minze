import { IRootState } from './reducers';

export const initialState: IRootState = {
  isReady: false,
  user: {
    displayName: '',
    phoneNumber: '',
    email: '',
    photoURL: ''
  },
  cart: {
    total: {
      discount: '',
      amount: ''
    },
    restaurant_name: '',
    cart_id: '16507624',
    items: {}
  },
  savedAddresses: [],
  currentDelivery: 0,
  location: {
    coords: {
      latitude: 0,
      longitude: 0
    }
  },
  network: {
    serverStatus: 'unavailable',
    authToken: '' // from aur servers
  },
  props: {
    aboveTopBar: {
      title: 'title',
      visible: false,
      onPress: () => {},
      navigation: null,
      info: 'unavailable'
    }
  }
};
