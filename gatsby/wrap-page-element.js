import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import Layout from '../src/components/layout/layout'

export default ({ element, props }) => (
  <AnimateSharedLayout>
    <Layout {...props}>
      {element}
    </Layout>
  </AnimateSharedLayout>
)