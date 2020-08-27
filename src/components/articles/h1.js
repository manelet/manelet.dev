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

const H1 = props => (
  <a href={`#${slugify(props.children)}`}>
    <motion.h1
      variants={variants}
      // initial='initial'
      // animate='animate'
      // exit='exit'
      {...props}
    />
  </a>
)

export default H1