import React from 'react'
import Layout from './src/components/layout/layout'
import { LayoutProvider } from './src/context/layout'

export const wrapRootElement = ({ element }) =>
  <LayoutProvider>
    {element}
  </LayoutProvider>

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>