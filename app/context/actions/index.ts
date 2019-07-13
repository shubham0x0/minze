import { TOGGLE_DARK_MODE } from './types'

export const toggleDarkMode = (darkMode: boolean) => ({
  type: TOGGLE_DARK_MODE,
  payload: darkMode ? 'darkMode' : 'lightMode',
})

export * from './types'
