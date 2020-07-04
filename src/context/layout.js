import React, { createContext, useContext, useReducer, useEffect } from 'react'

import createAppContext from './ctx'
import createReducer from './reducer'
import { ACTIONS } from './actions'
import COLORS from '../../colors'

const ctx = createAppContext()
const reducer = createReducer(ctx)
const LayoutContext = createContext(ctx)

const makeActions = (dispatch, fns) => Object.entries(fns).reduce((actions, [name, fn]) => {
  actions[name] = (...args) => dispatch(fn(...args))
  return actions
}, {})

export const LayoutProvider = ({ children }) => {
  return (
    <LayoutContext.Provider value={useReducer(reducer, ctx)}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  const [ctx, dispatch] = useContext(LayoutContext)
  const actions = makeActions(dispatch, ACTIONS)

  const toggleTheme = theme => {    
    const root = document.documentElement
    actions.toggleTheme(theme)
    localStorage.setItem('color-mode', theme)
    root.style.setProperty('--color-bg', COLORS[theme].bg)
    root.style.setProperty('--color-text-default', COLORS[theme].text)
    root.style.setProperty('--splash-bg', COLORS[theme].splash.bg)
    root.style.setProperty('--splash-bg-image', COLORS[theme].splash.bg_image)
    root.style.setProperty('--bg-post', COLORS[theme].bg_post)
    root.style.setProperty('--splash-wave', COLORS[theme].splash.wave)
    root.style.setProperty('--splash-arrow', COLORS[theme].splash.arrow)    
  }

  useEffect(() => {
    const root = document.documentElement
    const theme = root.style.getPropertyValue('--initial-color-mode')
    toggleTheme(ctx.theme || theme)
    // eslint-disable-next-line
  }, [])

  return [ctx, { ...actions, toggleTheme }]
}