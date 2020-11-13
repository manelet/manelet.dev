import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { LayoutProvider } from '../src/context/layout'

import Code from '../src/components/code/code'
import h from '../src/components/articles/h'
import P from '../src/components/articles/p'
import Pre from '../src/components/articles/pre'
import Img from '../src/components/articles/img'
import Wrapper  from '../src/components/articles/wrapper'

const components = {
  pre: Pre,
  code: Code,
  h1: h.h1,
  h2: h.h2,
  h3: h.h3,
  h4: h.h4,
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