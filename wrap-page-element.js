import React from 'react'
import Layout from './src/components/layout/layout'

export default ({ element, props }) => (
  <Layout {...props}>
    {element}
  </Layout>
)