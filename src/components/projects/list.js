import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Card from './card'

const listVariants = {
  enter: {
    // opacity: 1,
    transition: {
      staggerChildren: .2
    }
  },
  exit: {
    // opacity: 0
  }
}

const ProjectsList = ({ projects, pageContext }) => {
  const refs = {
    projects: new Array(projects.length).fill(useRef(null)),
    wrapper: useRef(null),
    wrapperScroll: useRef(null)
  }

  return (
    <aside ref={refs.wrapper} className="project-list">
      <motion.ul
        className='project-list-inner'
        variants={listVariants}
        // initial='exit'
        // animate='enter'
        layoutId='projects-list'
      >
          {projects.map(({ project }, i) => (
            <Card
              key={`proj-${project.fields.slug}`}
              isActive={project.frontmatter.name === pageContext.name}
              {...project}
            />
          ))}
      </motion.ul>
    </aside>
  )
}

export default ProjectsList