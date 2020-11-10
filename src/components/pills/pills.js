import React from 'react'
import cn from 'classnames'

import './pills.css'

export const Pills = ({ children }) => {
  return (
    <div className='pills'>
      {children}
    </div>
  );
};

export const Pill = ({ children, className = '', ...props }) => (
  <div
    className={cn('pill', className)}
    {...props}
  >
    {children}
  </div>
)
