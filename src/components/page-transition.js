import React from 'react'
import { MagicMotion } from 'framer-motion'

const Transition = ({ children }) => {
  if (typeof window === 'undefined') {
    return (
      <div>
        {children}
      </div>
    )
  }
  return (
    <MagicMotion>
      <div>
        {children}
      </div>
    </MagicMotion>
  )
}

export default Transition