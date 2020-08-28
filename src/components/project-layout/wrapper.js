import React from 'react'

const ProjectWrapper = ({ children }) => (
  <div className="page cont">
    <div className="cont-inner flex-col md:flex-row">
      {children}      
    </div>
  </div>
)

export default ProjectWrapper