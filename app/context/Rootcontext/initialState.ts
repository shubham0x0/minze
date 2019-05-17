import { IRootState } from './reducers';

export const initialState: IRootState = {
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
      info: 's'
    }
  }
};
