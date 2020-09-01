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

const H2 = props => (
  <a
    title={props.children}
    name={slugify(props.children, { lower: true })}
    href={`#${slugify(props.children, { lower: true })}`}
  >
    <motion.h2 variants={variants} {...props} />
  </a>
)

export default H2