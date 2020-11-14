import React from 'react'

import careerPath from '../../../static/career.json'

import './career.css'

const Career = ({ location }) => {
  return (
    <div className='careers'>
      <div className="careers__inner">
        {careerPath.map((job, i) => (
          <div className='career' key={`job-${i}`}>
            <div className="career__role">
              <div className="font-bold text-xl">
                {job.role}
              </div>
            </div>
            <div className="career__sep" />
            <div className="career__detail">
              <div className="career__detail__inner">
                {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Career