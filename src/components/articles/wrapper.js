import { Children } from 'react'

function truncate (text = '', limit = 250, after = '') {
	return text.trim().slice(0, limit) + after
}

function Wrapper ({ onlyExcerpt = false, ...props }) {
  if (onlyExcerpt && props.children.length) {
    const [excerpt] = props.children
      .filter((child, _) => child.props && child.props['data-excerpt'])
      .map(child => truncate(child.props.children))

    if (excerpt) {
      return excerpt
    }
  }

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
