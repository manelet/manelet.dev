import React from 'react'

import wrapRoot from './wrap-root-element'
import wrapPage from './wrap-page-element'
import { DarkThemeScript } from './src/lib/dark-theme'

export const onRenderBody = ({ setPreBodyComponents }) => setPreBodyComponents(<DarkThemeScript />)
export const wrapRootElement = wrapRoot
export const wrapPageElement = wrapPage