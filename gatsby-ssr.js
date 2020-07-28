import React from 'react'

import wrapRoot from './gatsby/wrap-root-element'
import wrapPage from './gatsby/wrap-page-element'
import { DarkThemeScript } from './src/lib/dark-theme'

export const onRenderBody = ({ setPreBodyComponents }) => setPreBodyComponents(<DarkThemeScript />)
export const wrapRootElement = wrapRoot
export const wrapPageElement = wrapPage