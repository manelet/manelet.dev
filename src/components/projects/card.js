import React, { useCallback } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { Link, navigate } from 'gatsby'

import useWindow from '../../hooks/useWindow'
import { variants } from './animations'

const Card = ({ layoutId, children, frontmatter, fields, isActive }) => {
  const { isTablet } = useWindow()

  const handleNavigate = useCallback(e => navigate(
    e.currentTarget.dataset.projectSlug,
    // { state: { projectListScroll: refs.wrapperScroll.current }}
    {}
  ), [])

  return (
    <motion.li
      whileHover='hover'
      initial='idle'
      // animate='enter'
      // key={`proj-${fields.slug}`}
      className={cn('relative, cursor-pointer')}
      onClick={handleNavigate}
      data-project-slug={fields.slug}
      data-active={isActive}
      // ref={refs.projects[i]}
      variants={variants}
      // layoutId={layoutId}
    >
      <div className={cn('project-list-container')}>
        <motion.div
          className="project-list-item"
          layoutId={`proj-list-item-${fields.slug}`}
        >
          <div className="project-list-item-inner">
            <header className='relative w-full h-full flex items-center' style={{ backgroundColor: frontmatter.bg_color }}>
              <div className='relative z-10'>
                <motion.div layoutId={`project-title-${fields.slug}}`} className='text-2xl font-bold'>
                  <Link to={fields.slug}>
                    {frontmatter.name}
                  </Link>             
                </motion.div>

                <motion.p className='text-sm' layoutId={`project-description-${fields.slug}}`}>
                  {frontmatter.description}
                </motion.p>
              </div>
              

              <div className="z-0 absolute left-0 top-0 right-0">
                <img src={`/images${fields.slug.slice(0, -1)}.png`} />
              </div>
            </header>              
          </div>        
        </motion.div>
      </div>
    </motion.li>
  )
}

export default Card