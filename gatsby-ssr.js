import React from 'react'

import wrapRoot from './gatsby/wrap-root-element'
import wrapPage from './gatsby/wrap-page-element'
import SSRScripts from './src/lib/ssr-scripts'

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setPreBodyComponents(<SSRScripts />)
  setHtmlAttributes({ lang: 'en' })
}
export const wrapRootElement = wrapRoot
export const wrapPageElement = wrapPage