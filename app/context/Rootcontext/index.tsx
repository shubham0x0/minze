import React, { useEffect } from 'react';
import dispatcher from './dispatcher';
import { reducer, IRootContextProps } from './reducers';
import { initialState } from './initialState';
import { GET_PERSISTED_CONTEXT } from './actions/types';
import * as Actions from './actions';
import LoadingAnimated from '../../components/loaders/LoadingAnimated';
import { getLocationUpdate, reverseGeocoder } from '../../utils/getLocation';

const RootContext = React.createContext<IRootContextProps>({ state: initialState });

const RootContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  if (!dispatcher.isReady) {
    dispatcher.isReady = true;
    dispatcher.dispatch = async params => await dispatch(params);
    Object.freeze(dispatcher);
  }
  const firstUpdate = React.useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      dispatch({ type: GET_PERSISTED_CONTEXT });
    }
  }, []);

  useEffect(() => {
    if (state.location) {
      reverseGeocoder(state.location.coords).then(result => {
        dispatch(Actions.updateGPS({ ...result, title: 'Current Location' }));
      });
    }
    // location state get updated
  }, [state.location]);

  return <RootContext.Provider value={value}>{props.children}</RootContext.Provider>;
};

const RootContextConsumer = RootContext.Consumer;
export { RootContext, RootContextProvider, RootContextConsumer, dispatcher, Actions };
