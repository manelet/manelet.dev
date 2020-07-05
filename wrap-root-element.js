import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { LayoutProvider } from './src/context/layout'

export default ({ element }) => (
  <MDXProvider>
    <LayoutProvider>
      {element}
    </LayoutProvider>
  </MDXProvider>
)