import React from 'react'

const Close = ({ toggle }) => {
  return (
    <div onClick={toggle} className='contact__close'>
      <svg viewBox="0 0 32 32">
        <g>
          <line
            x1="7"
            x2="25"
            y1="7"
            y2="25"
          />
          <line      
            x1="7"
            x2="25"
            y1="25"
            y2="7"
          />
        </g>
      </svg>    
    </div>
    
  )
}

export default Close