import React from 'react'

import Layout from '../../components/about/layout'
import Wip from '../../components/wip'

const Skills = ({ location }) => {
  return (
    <Layout
      title='Skills'
      description=''
      location={location}
    >
      <Wip description='' />
    </Layout>
  )
}

export default Skills