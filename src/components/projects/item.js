import React from 'react'
import { motion } from 'framer-motion'
import { navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ReactComponent as ArrowLeft } from '../../../static/icons/arrow-left.svg'
import '../../templates/project/project.css'

const projectContentVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .6
    }
  }
}

const Item = (props) => {
  const { data: { mdx: { body, fields, frontmatter } } } = props
  const handleBack = () => navigate('/projects')
  const id = fields.slug.split('/').filter(e => e !== '').pop()

  return (
    <>
      <motion.div
        layoutId={`project-header-${fields.slug}`}
        className={`project__open ${id}`}
        style={{ background: frontmatter.background }}
      >
        <div className='cont-inner flex-col mt-auto'>
          <div onClick={handleBack} className='cursor-pointer flex items-center mb-10'>
            <ArrowLeft width={24} />
            <span className="ml-3">
              back to projects
            </span>
          </div>
          <div>
            <div className="font-bold text-5xl">
              {frontmatter.name}        
            </div>

            <p className='text-xl mb-3'>
              {frontmatter.description}
            </p>

            <code className='cursor-pointer rounded bg-black text-xs p-3 opacity-50 hover:opacity-75'>
              {frontmatter.call_to_action}
            </code>            
          </div>
        </div>

        <div className="cont-inner flex-col mb-10 mt-auto ">
          <div className='project__panel'>
            <div className="project__panel__inner">
              <div className='w-full flex justify-start'>
                {frontmatter.url && (
                  <a href={frontmatter.url} target='_blank' rel='noopener noreferrer'>
                    visit site
                  </a>
                )}

                {frontmatter.github && (
                  <a href={frontmatter.github} target='_blank' rel='noopener noreferrer'>
                    github
                  </a>
                )}          
              </div>

              <div className='w-full flex justify-start md:justify-end'>
                {/* {frontmatter.tags && frontmatter.tags.length && frontmatter.tags.map(tag => (
                  <a key={`tag-${tag}`} className='label'>
                    {tag}
                  </a>
                ))} */}

                {frontmatter.stack && frontmatter.stack.length && frontmatter.stack.map(stack => (
                  <span key={`tag-${stack}`} className='label'>
                    {stack}
                  </span>
                ))}          
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial='initial'
        animate='animate'
        variants={projectContentVariants}
        className={`project__content ${id} w-full`}
        style={{ marginTop: 'calc(500px - 5rem)' }}
      >
        <MDXRenderer>
          {body}
        </MDXRenderer> 
      </motion.div>
    </>
  )
}

export default Item