import React, { Children } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { LayoutProvider } from '../src/context/layout'
import Code from '../src/components/code'

const components = {
  pre: props => <div {...props} className='code' />,
  code: Code,
  img: props => (
    <figure>
      <img {...props} />
    </figure>
  ),
  wrapper: props => (
    <>
      {Children.toArray(props.children).map(child => {
        if (child.props.children && child.props.children.props) {
          const childEl = child.props.children.props
        
          if (childEl && childEl.originalType === 'img') {
            return child.props.children
          }
        }
        return child
      })}
    </>
  )
}

export default ({ element }) => (
  <MDXProvider components={components}>
    <LayoutProvider>
      {element}
    </LayoutProvider>
  </MDXProvider>
)