import React from 'react'
import { motion } from 'framer-motion'
import { Link, navigate } from 'gatsby'
import { cardVariants } from './animations'

import './card.css'

const Card = ({ frontmatter, fields }) => {
  const handleNavigate = slug => () => navigate(slug, { state: { scrollY: window.scrollY }})

  return (
    <motion.div
      variants={cardVariants}
      onClick={handleNavigate(fields.slug)}
      layoutId={`project-header-${fields.slug}`}
      className='project'
      style={{ background: frontmatter.background }}
    >
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
    </motion.div>
  )
}

export default Card