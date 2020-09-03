import React, { createContext, useContext, useReducer, useEffect } from 'react'

import createAppContext from './ctx'
import createReducer from './reducer'
import { ACTIONS } from './actions'
import { generateCssVariables } from '../lib/dark-theme'
import toggleMenu from '../lib/toggle-menu'

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
    generateCssVariables(theme, root)
  }

  const toggleMobileMenu = () => {
    toggleMenu({
      burger: ctx.refs.burger.current,
      navInner: ctx.refs.navInner.current,
      navMenu: ctx.refs.navMenu.current
    })    
    actions.toggleMobileMenu()
  }

  useEffect(() => {
    const root = document.documentElement
    const theme = root.style.getPropertyValue('--initial-color-mode')
    toggleTheme(ctx.theme || theme)
    // eslint-disable-next-line
  }, [])

  return [ctx, { ...actions, dispatch, toggleTheme, toggleMobileMenu }]
}