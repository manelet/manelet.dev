import React from "react"
import { RecoilRoot } from 'recoil';

import Layout from './src/components/layout/layout'
import { LayoutProvider } from './src/context/layout'

import './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './src/styles/main.css'

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>
    <LayoutProvider>
      {element}      
    </LayoutProvider>
  </RecoilRoot>
)

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>