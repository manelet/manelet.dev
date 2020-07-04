import React from "react"

import Layout from './src/components/layout/layout'
import { LayoutProvider } from './src/context/layout'

import './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './src/styles/main.css'

export const wrapRootElement = ({ element }) => (
  <LayoutProvider>
    {element}      
  </LayoutProvider>
)

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>