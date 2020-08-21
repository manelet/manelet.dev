import React from 'react'
import { MagicMotion } from 'framer-motion'

const Transition = ({ children, location }) => {
  return (
    <MagicMotion>
      {children}
    </MagicMotion>
  )
}

export default Transition