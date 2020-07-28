import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="w-full flex flex-col mb-auto md:ml-5 px-5">
      {children}
    </div>
  )
}

export default Content