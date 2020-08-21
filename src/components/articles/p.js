import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 50
  }
}

function P (props) {
  return (
    <motion.p
      variants={variants}
      // initial='initial'
      // animate='animate'
      // exit='exit'
      {...props}
    />
  )
}

export default P
