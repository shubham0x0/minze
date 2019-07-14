import React from 'react';
import dispatcher from './dispatcher';
import { reducer, IRootContextProps } from './reducers';
import { initialState } from './initialState';
import { GET_PERSISTED_CONTEXT } from './actions/types';
import * as RootContextActions from './actions';

const RootContext = React.createContext<IRootContextProps>({ state: initialState });

const RootContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  if (!dispatcher.isReady) {
    dispatcher.isReady = true;
    dispatcher.dispatch = params => dispatch(params);
    Object.freeze(dispatcher);
  }
  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      dispatch({ type: GET_PERSISTED_CONTEXT });
      return;
    }
  }, []);

  return <RootContext.Provider value={value}>{props.children}</RootContext.Provider>;
};

const RootContextConsumer = RootContext.Consumer;
export { RootContext, RootContextProvider, RootContextConsumer, dispatcher, RootContextActions };
