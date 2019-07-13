import React from 'react'
import dispatcher from './dispatcher'
import { reducer } from './reducers'
import * as actions from './actions'

export const initialState = {
  theme: {
    primary: '#f00'
  }
}

const RootContext = React.createContext(reducer(initialState, {}))

const RootContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  if (!dispatcher.isReady) {
    dispatcher.isReady = true
    dispatcher.dispatch = params => dispatch(params)
    Object.freeze(dispatcher)
  }

  return <RootContext.Provider value={value}>{props.children}</RootContext.Provider>
}

const RootContextConsumer = RootContext.Consumer
export { RootContext, RootContextProvider, RootContextConsumer, dispatcher, actions }
