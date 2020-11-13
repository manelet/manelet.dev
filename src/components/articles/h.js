import React from 'react'
import { motion } from 'framer-motion'
import slugify from 'slugify'

const h = ['h1', 'h2', 'h3', 'h4']
const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  exit: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export default h.reduce((acc, curr) => {
  const name = curr
  acc[name] = props => {
    const value = typeof props.children !== 'string' ? props.children[0] : props.children
    const Heading = motion[curr]

    return (
      <a
        title={props.children}
        name={slugify(value, { lower: true })}
        href={`#${slugify(value, { lower: true })}`}
      >
        <Heading variants={variants} {...props} />
      </a>
    )    
  }

  acc[name].displayName = name

  return acc
}, {})