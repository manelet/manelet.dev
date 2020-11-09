import React from 'react'
import { motion } from 'framer-motion'

export const defaultVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

const PageWrapper = ({
  children,
  variants,
  transition = {},
  ...props
}) => {
  return (
    <motion.div
      variants={variants || defaultVariants}
      animate='animate'
      initial='initial'
      transition={transition}
      exit='exit'
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper