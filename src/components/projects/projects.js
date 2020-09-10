import React from 'react'
import { AnimatePresence } from 'framer-motion'

import List from './list'
import Item from './item'
import useProjects from '../../hooks/useProjects'

const Projects = (props) => {
  const projects = useProjects()
  const activeProject = props.pathContext.slug
    ? projects.find(({ project }) => project.fields.slug === props.pathContext.slug)
    : undefined

  return (
    <div className="page cont">
      <div className="cont-inner flex-col justify-center items-center">
        <List projects={projects} {...props} />

        <AnimatePresence>
          {activeProject && (
            <Item
              key={`proj-${activeProject.project.fields.slug}`}
              content={props.children}            
              {...props}
              {...activeProject.project}
            />
          )}
        </AnimatePresence>
      </div>
    </div> 
  )
}

export default Projects