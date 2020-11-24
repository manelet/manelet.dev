import { Children } from 'react'

function Wrapper ({ onlyExcerpt = false, ...props }) {
   const components = Children.toArray(props.children).map(child => {
    if (child && child.props && child.props['data-excerpt']) {
      return null
    }

    if (child.props && child.props.children && child.props.children.props) {
      const childEl = child.props.children.props
    
      if (childEl && childEl.originalType === 'img') {
        return child.props.children
      }
    }
    return child
  })

  return components
}

export default Wrapper
