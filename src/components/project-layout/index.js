import React from 'react'

import Wrapper from './wrapper'
import Content from './content'
import ProjectsList from './list/list'

import './project-layout.css'

const ProjectLayout = ({ children, ...props }) => (
  <Wrapper>
    <ProjectsList {...props} />
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export default ProjectLayout