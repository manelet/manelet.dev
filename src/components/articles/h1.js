import React from 'react'
import { motion } from 'framer-motion'
import slugify from 'slugify'

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

const H1 = props => {
  const value = typeof props.children !== 'string' ? props.children[0] : props.children

  return (
    <a
      title={props.children}
      name={slugify(value, { lower: true })}
      href={`#${slugify(value, { lower: true })}`}
    >
      <motion.h1 variants={variants} {...props} />
    </a>
  )
}

export default H1