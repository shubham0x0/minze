import { initialState } from '..'
import { TOGGLE_DARK_MODE, RESET_STATE } from '../actions/types'
import { DarkTheme, LightTheme } from '../../theme';

export const reducer = (state: any, action: { type?: string; payload?: any }) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, theme: action.payload === 'darkMode' ? DarkTheme : LightTheme }
    case RESET_STATE:
      return initialState
    default:
      return state
  }
}
