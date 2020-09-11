import React, { useCallback, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { contentVariants } from './animations'
import '../../templates/project/project.css'

const Item = ({ data: { mdx: { body, fields, frontmatter } }, location }) => {
  const handleBack = useCallback(e => {
    if (
      e.target.classList.contains('project-list-container') ||
      e.target.classList.contains('close')
    ) {
      navigate('/projects')
    }
  }, [])

  useLayoutEffect(() => {
    document.body.classList.add('locked')
    return () => document.body.classList.remove('locked')
  }, [])

  const style = location.state.scrollY ? { top: `${location.state.scrollY}px` } : {}

  return (
    <div
      className='project-list-container open'
      onClick={handleBack}
    >
      <motion.div
        className="project-list-item"
        style={style}
        layoutId={`proj-list-item-${fields.slug}`}
      >
        <div className='close' onClick={handleBack}>
          &laquo; Back to projects
        </div>

        {/* <div className="image-container absolute left-0 top-0 z-0">
          <img src={`/images${fields.slug.slice(0, -1)}.png`} />
        </div> */}

        <div className="project-list-item-inner">
          <header style={{backgroundColor: frontmatter.bg_color}}>
            <div className='relative z-10'>
              <motion.div layoutId={`project-title-${fields.slug}}`} className="font-bold text-5xl">
                {frontmatter.name}        
              </motion.div>

              <motion.p className='text-xl' layoutId={`project-description-${fields.slug}}`}>
                {frontmatter.description}
              </motion.p>
            </div>
            <div className="z-0 absolute left-0 top-0 right-0">
              <img src={`/images${fields.slug.slice(0, -1)}.png`} />
            </div>
          </header>
        
          <div className="project-list-item-content">
            <motion.div
              variants={contentVariants}
              initial='initial'
              animate='animate'
            >
              <div className="flex justify-between mb-5">
                {frontmatter.url && (
                  <div className="flex">
                    <div className='tagged'>
                      <svg width='12' height='12' fill='#1a202c' viewBox="0 0 1792 1792" className='mr-2'>
                        <path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"/>
                      </svg>

                      {frontmatter.url}
                    </div>
                  </div>
                )}
                
                {frontmatter.tags && frontmatter.tags.length && (
                  <div className="flex">
                    {frontmatter.tags.map(tag => (
                      <div key={`tag-${tag}`} className='tagged'>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <MDXRenderer>
                {body}
              </MDXRenderer>  
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Item