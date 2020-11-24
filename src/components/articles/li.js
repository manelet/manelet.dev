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

const Li = props => {
  return (
    <motion.li variants={variants} {...props}>
      {props.children}
    </motion.li>
  );
};

export default Li;