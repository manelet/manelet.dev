import React from 'react'

const Wip = () => {
  return (
    <div className='project__wip'>
      <span className='w-32 text-center text-5xl' role='img' aria-label='construciton sign'>
        🚧
      </span>  
      <div className='text-center'>
        <h2>wip</h2>
        <p>This project is still in development and therefore some features might not work</p>
      </div>
      <span className='w-32 text-center text-5xl' role='img' aria-label='construciton sign'>
        🚧
      </span>
    </div>
  )
}

export default Wip