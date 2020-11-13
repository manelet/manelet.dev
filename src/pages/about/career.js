import React from 'react'

import Layout from '../../components/about/layout'
import Wip from '../../components/wip'

const Career = ({ location }) => {
  return (
    <Layout
      slug='/about/career'
      title='Career'
      description=''
      location={location}
    >
      <Wip description='' />
    </Layout>
  )
}

export default Career