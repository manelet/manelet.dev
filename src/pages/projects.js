import React from 'react'
import SEO from '../components/seo'
import Projects from '../components/projects/projects'

const Page = props => (
  <>
    <SEO
      slug='/projects'
      title='Projects'
      description='Side projects created and maintained by Manel on his spare time'
    />
    <Projects {...props} />     
  </>
)

export default Page