import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

import { letter } from './logo.anim'

export default forwardRef(
  ({ children }, ref) => (
    <motion.span ref={ref} variants={letter}>
      {children}
    </motion.span>
  )
)
