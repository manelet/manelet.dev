import React from 'react'
import { motion } from 'framer-motion'
import { navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ReactComponent as ArrowLeft } from '../../../static/icons/arrow-left.svg'
import '../../templates/project/project.css'

const Item = (props) => {
  const { data: { mdx: { body, fields, frontmatter } } } = props
  const handleBack = e => navigate('/projects')

  // const style = location.state && location.state.scrollY ? { top: `${location.state.scrollY}px` } : {}

  return (
    <>
      <motion.div
        layoutId={`project-header-${fields.slug}`}
        className='absolute w-full top-0 left-0 flex justify-center items-center text-white bg-cover'
        style={{
          height: '500px',
          backgroundImage: `url(/images${fields.slug.slice(0, -1)}.png)`,
          backgroundColor: frontmatter.bg_color
        }}
      >
        <div className='cont-inner flex-col'>
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
      </motion.div>    
      <div
        className='w-full'
        style={{ marginTop: 'calc(500px - 4rem)' }}
      >
        {frontmatter.tags && frontmatter.tags.length && (
          <div className="flex">
            {frontmatter.tags.map(tag => (
              <div key={`tag-${tag}`} className='tagged'>
                {tag}
              </div>
            ))}
          </div>
        )}

        <MDXRenderer>
          {body}
        </MDXRenderer> 
      </div>
    </>
  )
}

export default Item