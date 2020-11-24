import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: .3
    }
  },
  exit: {
    opacity: 0
  }
}

const Ul = ({ props, children }) => {
  return (
    <motion.ul variants={variants} {...props}>
      {children}
    </motion.ul>
  );
};

export default Ul;