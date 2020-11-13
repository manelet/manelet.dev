import React from 'react'
import { motion } from 'framer-motion'

import Card from './card'

const listVariants = {
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: .3
    }
  },
  exit: {
    opacity: 0
  }
}

const ProjectsList = ({ projects }) => (
  <motion.ul
    variants={listVariants}
    initial='exit'
    animate='enter'
    layoutId='projects-list'
  >
    {projects.map((project) => (
      <Card
        key={`proj-${project.fields.slug}`}
        {...project}
      />
    ))}
  </motion.ul>
)

export default ProjectsList