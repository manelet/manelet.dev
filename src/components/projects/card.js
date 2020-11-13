import React from 'react'
import { motion } from 'framer-motion'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'

import { cardVariants } from './animations'

import './card.css'

const Card = ({ image, frontmatter, fields }) => {
  const handleNavigate = slug => () => navigate(slug, { state: { scrollY: window.scrollY }})

  return (
    <motion.div
      variants={cardVariants}
      onClick={handleNavigate(fields.slug)}
      layoutId={`project-header-${fields.slug}`}
      className='project'
      style={{ background: frontmatter.background }}
    >
      <div className='z-10'>
        <div className='text-2xl font-bold'>
          <Link to={fields.slug}>
            {frontmatter.name}
          </Link>             
        </div>

        <p className='mb-3'>
          {frontmatter.description}
        </p>

        <code className='rounded bg-black text-xs p-3 opacity-50'>
          {frontmatter.call_to_action}
        </code>
      </div>
      

      {image && (
        <div className='absolute w-full h-full left-0 right-0' style={{ opacity: .15 }}>
          <Img fluid={image.image.fluid} />
        </div>
      )}
    </motion.div>
  )
}

export default Card