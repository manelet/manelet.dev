import React from 'react'
import SEO from '../components/SEO'

import Projects from '../components/projects/projects'

import '../components/projects/project-layout.css'

const Page = props => (
  <>
    <SEO
      title='Projects'
      description='Side projects created and maintained by Manel on his spare time'
    />
    <Projects {...props} />     
  </>
)

export default Page