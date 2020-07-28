import React from 'react'

const ProjectWrapper = ({ children }) => (
  <div className="w-full flex pt-32">
    <div className="w-full flex flex-col md:flex-row px-0 md:px-32 lg:px-48">
      {children}      
    </div>
  </div>
)

export default ProjectWrapper