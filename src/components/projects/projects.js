import React from 'react'
import { AnimatePresence } from 'framer-motion'

import List from './list'
import Item from './item'
import useProjects from '../../hooks/useProjects'
import './projects.css'

const Projects = (props) => {
  const isProjectPage = props.pageContext && props.pageContext.name
  const projects = useProjects()

  if (!isProjectPage) {
    return (
      <Wrapper>
        <List projects={projects} {...props} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <AnimatePresence>
        <Item key={`proj-${props.pageContext.slug}`} {...props} />
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => (
  <div className="page cont">
    <div className="cont-inner flex-col justify-center items-center">
      {children}
    </div>
  </div>
)

export default Projects