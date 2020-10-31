import React from 'react'
import { motion } from 'framer-motion'
import { Link, navigate } from 'gatsby'
import { cardVariants } from './animations'

const Card = ({ frontmatter, fields }) => {
  const handleNavigate = slug => () => navigate(slug, { state: { scrollY: window.scrollY }})

  return (
    <motion.div
      variants={cardVariants}
      onClick={handleNavigate(fields.slug)}
      layoutId={`project-header-${fields.slug}`}
      className='project hover:shadow-xl cursor-pointer px-10 rounded-lg relative h-48 mb-10 w-full text-white flex flex-col items-start justify-center overflow-hidden'
      style={{
        backgroundImage: `url(/images/${fields.slug.slice(0, -1)}.png)`,
        background: frontmatter.bg_color,
      }}
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