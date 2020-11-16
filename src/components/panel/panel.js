import React, { useState } from 'react'
import cn from 'classnames'

import './panel.css'

const createMarkup = __html => ({ __html })

const Panel = ({ items, startIndex = 0 }) => {
  const [curr, set] = useState(startIndex)

  return (
    <div className="panel">
      <div className="panel__list">
        <div className="panel__list__inner">
          <ul>
            {items.map(({ name }, i) => (
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
      <div className="panel__detail" dangerouslySetInnerHTML={createMarkup(items[curr].description)} />  
    </div>
  )
}

export default Panel