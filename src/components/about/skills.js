import React, { useState } from 'react'
import cn from 'classnames'

import skills from '../../../static/skills.json'

import './skills.css'

const Skills = ({ location }) => {
  const [curr, set] = useState(skills.length - 1)

  return (
    <div className="skills">
      <div className="skills__list">
        <div className="skills__list__inner">
          <ul>
            {skills.map(({ name }, i) => (
              <li
                key={`skill-${i}`}
                onClick={() => set(i)}
                className={cn(i === curr && 'active')}
              >
                <div>
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="skills__detail">
        {skills[curr].description}
      </div>      
    </div>
  )
}

export default Skills