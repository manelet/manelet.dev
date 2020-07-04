import React from 'react'
import Layout from './src/components/layout/layout'
import { LayoutProvider } from './src/context/layout'
import COLORS from './colors'

const DarkThemeScript = () => (
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

      root.style.setProperty('--color-bg', theme === 'dark' ? '${COLORS.dark.bg}' : '${COLORS.light.bg}')
      root.style.setProperty('--color-text-default', theme === 'dark' ? '${COLORS.dark.text}' : '${COLORS.light.text}')
      root.style.setProperty('--splash-bg', theme === 'dark' ? '${COLORS.dark.splash.bg}' : '${COLORS.light.splash.bg}')
      root.style.setProperty('--splash-bg-image', theme === 'dark' ? '${COLORS.dark.splash.bg_image}' : '${COLORS.light.splash.bg_image}')
      root.style.setProperty('--bg-post', theme === 'dark' ? '${COLORS.dark.bg_post}' : '${COLORS.light.bg_post}')
      root.style.setProperty('--splash-wave', theme === 'dark' ? '${COLORS.dark.splash.wave}' : '${COLORS.light.splash.wave}')
      root.style.setProperty('--splash-arrow', theme === 'dark' ? '${COLORS.dark.splash.arrow}' : '${COLORS.light.splash.arrow}')

      root.style.setProperty('--initial-color-mode', theme)
    })()
  `}} />
)

export const onRenderBody = ({ setPreBodyComponents }) => setPreBodyComponents(<DarkThemeScript />)

export const wrapRootElement = ({ element }) =>
  <LayoutProvider>
    {element}
  </LayoutProvider>

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>