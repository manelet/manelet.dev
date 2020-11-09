import React from 'react'
import { AnimatePresence } from 'framer-motion'

import List from './list'
import Item from './item'
import useProjects from '../../hooks/useProjects'
import PageWrapper from '../../components/page-wrapper'

import './projects.css'

const Projects = (props) => {
  const isProjectPage = props.pageContext && props.pageContext.name
  const projects = useProjects()

  return (
    <PageWrapper className="page cont">
      <div className="cont-inner flex-col justify-center items-center">
        {isProjectPage
          ? (
            <AnimatePresence>
              <Item key={`proj-${props.pageContext.slug}`} {...props} />
            </AnimatePresence>
          )
          : (
            <List projects={projects} {...props} />
          )
        }
      </div>
    </PageWrapper>    
  )
}

export default Projects