import { Children } from 'react'

function Wrapper (props) {
  return Children.toArray(props.children).map(child => {
    if (child.props.children && child.props.children.props) {
      const childEl = child.props.children.props
    
      if (childEl && childEl.originalType === 'img') {
        return child.props.children
      }
    }
    return child
  })
}

export default Wrapper
