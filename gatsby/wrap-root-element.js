import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { LayoutProvider } from '../src/context/layout'

import Code from '../src/components/code/code'
import H1 from '../src/components/articles/h1'
import H2 from '../src/components/articles/h2'
import H3 from '../src/components/articles/h3'
import P from '../src/components/articles/p'
import Pre from '../src/components/articles/pre'
import Img from '../src/components/articles/img'
import Wrapper  from '../src/components/articles/wrapper'

const components = {
  pre: Pre,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  img: Img,
  wrapper: Wrapper
}

export default ({ element }) => (
  <MDXProvider components={components}>
    <LayoutProvider>
      {element}
    </LayoutProvider>
  </MDXProvider>
)