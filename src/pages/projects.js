import React from 'react'
import Layout from '../components/project-layout/'
import SEO from '../components/SEO'

function Projects (props) {
  return (
    <>
      <SEO title='Projects' description='Side projects created and maintained by Manel on his spare time' />
      <Layout { ...props}>
        project detail
      </Layout>
    </>
  )
}

export default Projects