import React from 'react'
import COLORS from '../../colors'

export const generateCssVariables = (theme, root) => {
  if (!theme) {
    return Object.keys(COLORS.dark).map(varName =>
      `root.style.setProperty('--${varName}', theme === 'dark' ? '${COLORS.dark[varName]}' : '${COLORS.light[varName]}')`
    ).join('\n')
  }

  Object.keys(COLORS[theme]).map(
    varName => root.style.setProperty(`--${varName}`, `${COLORS[theme][varName]}`)
  ) 
}

export const DarkThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: `
    (function () {
      function getInitialTheme () {
        var lsTheme = window.localStorage.getItem('color-mode')
        
        if (lsTheme) {
          return lsTheme
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        } else {
          return 'light'
        }
      }

      const theme = getInitialTheme()
      const root = document.documentElement

      ${generateCssVariables()}

      root.style.setProperty('--initial-color-mode', theme)
    })()
  `}} />
)