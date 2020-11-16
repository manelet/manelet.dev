import React from 'react'
import dayjs from 'dayjs'

import careerPath from '../../../static/career.json'

import './career.css'

const Career = () => {
  return (
    <div className='careers'>
      <div className="careers__inner">
        {careerPath.map((job, i) => (
          <div className='career' key={`job-${i}`}>
            <div className="career__role">
              {job.roles.map(({ role, startedAt, endedAt }) => (
                <div className='career__role__detail'>
                  <div className="font-bold text-xl">
                    {role}
                  </div>
                  <p>
                    {job.company} <span>{dayjs(startedAt).format('MMM YYYY')} - {!endedAt ? 'Present' : dayjs(endedAt).format('MMM YYYY')}</span>
                  </p>                
                </div>
              ))}
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