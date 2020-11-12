import React from 'react'
import cn from 'classnames'

import './pills.css'

export const Pills = ({ children }) => {
  return (
    <div className='pills'>
      <div className="pills__inner">
        {children}
      </div>
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
