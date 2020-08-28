import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="w-full flex flex-col mb-auto md:ml-5 md:px-5 mt-8 md:mt-0">
      {children}
    </div>
  )
}

export default Content