import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    transform: 'scale(0.7)'
  },
  animate: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      duration: .5
    }
  },
  exit: {
    transform: 'scale(0.7)',
    opacity: 0
  }
}

function Img (props) {
  if (props['data-gallery']) {
    return (
      <img {...props} />
    )
  }

  return (
    <motion.figure
      variants={variants}
      className='post-pic'
    >
      <img {...props} />
    </motion.figure>
  )
}

export default Img
